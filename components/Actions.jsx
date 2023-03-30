import { useCoffeeContext } from '@/hooks/useCoffeeContext';

const Actions = ({ quantity, handleQuantity, addToCart }) => {
  const { handleChangeModal, selectedProduct } = useCoffeeContext();

  const handlePlusItem = () => {
    quantity < 5 ? handleQuantity(quantity + 1) : null;
  };

  const handleMinusItem = () => {
    quantity > 1 ? handleQuantity(quantity - 1) : handleChangeModal();
  };

  return (
    <div className="actions flex mt-5 gap-4 items-center">
      <div className="flex gap-4 border-[var(--orange)] border-2 w-fit p-2 hover:rounded-2xl">
        <button onClick={handleMinusItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>
        <p className="text-xl">{quantity}</p>
        <button onClick={handlePlusItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </button>
      </div>
      <div>
        <button
          type="button"
          className="bg-black text-[var(--orange)] p-3 font-bold border hover:rounded-2xl"
          onClick={()=>addToCart({...selectedProduct, quantity})}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Actions;
