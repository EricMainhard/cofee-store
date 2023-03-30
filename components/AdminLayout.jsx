import Head from 'next/head';
import { ProductModal } from '@/components/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCoffeeContext } from '@/hooks/useCoffeeContext';
import Image from 'next/image';
import Logo from '@/public/assets/img/logo-white.png';

const AdminLayout = ({ children, page }) => {

  const { handleChangeModal } = useCoffeeContext();

  return (
    <>
      <Head>
        <title>Vegan Coffee Store - {page} </title>
        <meta name="description" content="Vegan coffee store" />
      </Head>
      <div className="md:flex px-2">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 flex justify-center items-start">
          <Image
            src={Logo}
            width={150}
            height={150}
            alt={'Vegan Coffe Store - Logo'}
          />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen py-4">
          {children}
        </main>
      </div>
      <ToastContainer/>
    </>
  );
};

export default AdminLayout;
