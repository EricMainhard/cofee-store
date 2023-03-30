import Image from 'next/image';
import { formatCurrency } from '@/helpers';
import { useCoffeeContext } from '@/hooks/useCoffeeContext';

const Product = ({ id, name, image, price }) => {

  const { selectedProduct, handleSetProduct, handleChangeModal } = useCoffeeContext();

  return (
    <div className="border p-3 w-full group">
      <Image
        src={`/assets/img/${image}.webp`}
        width={500}
        height={500}
        alt={`${name} image`}
        className="object-cover aspect-square group-hover:brightness-50"
      />
      <div className="py-5 relative">
        <h3 className="text-xl">{name}</h3>
        <p className="mt-2 text-xl font-bold text-[var(--orange)]">
          {formatCurrency(price)}
        </p>
        <button
          type="button"
          className="absolute -top-12 left-0 right-0 p-3 rounded-sm opacity-0 bg-black text-white group-hover:opacity-100"
          onClick={()=>{
            handleSetProduct({id, name, image, price})
            handleChangeModal();
          }}
        >
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default Product;
