import Image from 'next/image';
import { Actions } from '@/components/index';
import { useEffect, useState } from 'react';
import { useCoffeeContext } from '@/hooks/useCoffeeContext';
import { formatCurrency } from '@/helpers';

const ProductModal = () => {
  const { selectedProduct, handleChangeModal, handleAddProductToCart, order } = useCoffeeContext();
  const [quantity, setQuantity] = useState(1);

  useEffect(()=>{
    let productInOrder = order.find(prod => prod.id === selectedProduct.id);
    if (productInOrder){
      setQuantity(productInOrder.quantity);
    }
  },[selectedProduct, order])

  return (
    <div className="md:flex gap-10 h-full">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={600}
          className="object-cover h-full"
          alt={`${selectedProduct.name}`}
          src={`/assets/img/${selectedProduct.image}.webp`}
        />
      </div>
      <div className="md:w-2/3">
        <div className='absolute top-4 right-4'>
          <button onClick={handleChangeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h3 className='text-3xl'>{selectedProduct.name}</h3>
        <p className='text-3xl mt-5 font-bold text-[var(--orange)]'>{formatCurrency(selectedProduct.price)}</p>
        <Actions quantity={quantity} handleQuantity={setQuantity} addToCart={handleAddProductToCart}/>
      </div>
    </div>
  );
};

export default ProductModal;
