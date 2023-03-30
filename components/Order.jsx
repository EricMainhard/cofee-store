import Image from 'next/image';
import { formatCurrency } from '@/helpers';
import axios from 'axios';
import { toast } from 'react-toastify';

const Order = ({ order }) => {
  const { id, name, date, total, order: items, fullfilled } = order;
  let formattedDate = new Date(Number(date)).toLocaleString();

  const completeOrder = async () => {
    try {
      const data = await axios.post(`/api/orders/${id}`, {
        closed: true
      });
      toast.success('Order fullfilled');
    } catch (err) {
      console.log(err);
    }
  };

  const openOrder = async () => {
    try {
      const data = await axios.post(`/api/orders/${id}`, {
        closed: false
      });
      toast.success('Order open');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border rounded-md p-2 mt-2 bg-white">
      <div>
        <h4 className="font-bold text-xl">Order: {id}</h4>
        <p>Name: {name}</p>
        <p>Date: {formattedDate}</p>
      </div>
      <div className="my-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2 my-2">
            <Image
              width={150}
              height={200}
              src={`/assets/img/${item.image}.webp`}
              alt={`${item.name} image`}
            />
            <div>
              <h4>{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t mt-2 w-full flex justify-between pt-2 items-center">
        <h4 className="text-xl font-bold">Total: {formatCurrency(total)}</h4>
        {!fullfilled ? (
          <button
            className="p-2 rounded-md bg-[var(--orange)] font-bold"
            onClick={completeOrder}
          >
            Close order
          </button>
        ) : (
          <button
            className="p-2 rounded-md bg-[var(--orange)] font-bold"
            onClick={openOrder}
          >
            Open order
          </button>
        )}
      </div>
    </div>
  );
};

export default Order;
