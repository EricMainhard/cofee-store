import { Order } from '@/components/index';
import { useState  } from 'react';

const Orders = ({ orders }) => {

  const [activeBtn, setActiveBtn] = useState('open');

  const handleActiveBtn = (e) => {
    setActiveBtn(e.target.id);
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-evenly">
        <button
          className={`${
            activeBtn === 'open' ? 'bg-[var(--orange)] text-white' : 'hover:bg-[var(--orange)] hover:opacity-30 hover:text-white'
          } uppercase p-4 border rounded-md w-full font-bold`}
          id="open"
          onClick={handleActiveBtn}
        >
          Open orders
        </button>
        <button
          className={`${
            activeBtn === 'closed' ? 'bg-[var(--orange)] text-white' : 'hover:bg-[var(--orange)] hover:opacity-30 hover:text-white'
          } uppercase p-4 border rounded-md w-full  font-bold `}
          id="closed"
          onClick={handleActiveBtn}
        >
          Closed orders
        </button>
      </div>
      <div className="mt-4">
        { activeBtn === 'open' ? (
          orders.map((order)=>{
            if (order.fullfilled === false){
              return <Order order={order} key={order.id}/>
            }
          })
        ) : (
          orders.map((order)=>{
            if (order.fullfilled === true){
              return <Order order={order} key={order.id}/>
            }
          })
        )}
      </div>
    </div>
  );
};

export default Orders;
