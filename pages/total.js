import { Layout } from '@/components';
import { useCoffeeContext } from '@/hooks/useCoffeeContext';
import { formatCurrency, calcTotal } from '@/helpers';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Total = () => {
  const { order, name, setName, handleCompleteOrder } = useCoffeeContext();

  return (
    <Layout page="Total">
      <main className="p-4">
        <h1 className="text-3xl uppercase">Total</h1>
        <form className="mt-3" onSubmit={(e)=>{
                handleCompleteOrder(e, order, name, calcTotal(order), Date.now().toString())
            }}>
          <div className="flex flex-col">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full lg:w-1/3 rounded-md border-none outline-[var(--orange)] p-3 uppercase"
            />
          </div>
          <div className="mt-10 border-t border-black font-bold text-xl">
            <p className="mt-5">
              Total <span className="ml-5">{formatCurrency(calcTotal(order))}</span>
            </p>
          </div>
          <button
            type="submit"
            className="text-center uppercase py-3 px-5 rounded-md text-black mt-5 bg-[var(--orange)] hover:text-[var(--orange)] hover:bg-black disabled:bg-slate-100 disabled:text-slate-400"
            disabled={name == ""}
          >
            Confirm order
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default Total;
