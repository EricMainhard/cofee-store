import useSWR from 'swr';
import axios from 'axios';
import { AdminLayout, Orders } from '@/components/index';

const Admin = () => {
  const fetcher = () => axios('/api/orders').then((data) => data.data);

  const { data, error, isLoading } = useSWR('api/orders', fetcher, {refreshInterval: 100});
  
  return (
    <AdminLayout page={'Admin'}>
      <h1 className="text-4xl font-black">Administration Panel</h1>
      <p className="text-2xl my-10">Manage orders:</p>
      {isLoading ? 'Loading orders...' : data && data.length > 0 ? <Orders orders={data} /> : 'No pending orders'}
    </AdminLayout>
  );
};

export default Admin;
