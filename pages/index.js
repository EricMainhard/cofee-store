import { Layout, Product } from '@/components/index';
import { useCoffeeContext } from '@/hooks/useCoffeeContext';

export default function Home() {
  const { currentCategory } = useCoffeeContext();

  return (
    <Layout page={currentCategory?.name}>
      <main className="p-4">
        <h1 className="text-4xl uppercase">{currentCategory?.name}</h1>
        <p className="text-2xl my-10">Create your order:</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {currentCategory?.products?.map((prod) => (
            <Product key={prod.id} {...prod}/>
          ))}
        </div>
      </main>
    </Layout>
  );
}
