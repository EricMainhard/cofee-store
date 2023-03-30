import { Layout } from "@/components";
import { useCoffeeContext } from "@/hooks/useCoffeeContext";
import { ProductResume } from '@/components/index';

const Resume = () => {

    const { order } = useCoffeeContext();
 
    return (
        <Layout page="Resume">
            <main className="p-4">
                <h1 className="text-3xl uppercase">Check your order:</h1>
                <div className="mt-3">
                {order.length > 0 ? (
                    order.map( item => (
                        <ProductResume key={item.id} product={item}/>
                    ))
                ) : <p className="text-xl text-center">
                        There are no products in your cart yet
                    </p>
                }
                </div>
            </main>
        </Layout>
    )
}

export default Resume;