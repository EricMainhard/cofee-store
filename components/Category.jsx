import Image from 'next/image';
import { useCoffeeContext } from '@/hooks/useCoffeeContext';

const Category = ({ name, icon, id }) => {
  const { categories, currentCategory, handleSetCurrentCategory } =
    useCoffeeContext();

  return (
    <div
      className={`flex items-center gap-2 w-full border p-5 hover:bg-[var(--orange)] ${
        currentCategory?.id === id ? 'bg-[var(--orange)]' : ''
      }`}
    >
      <button
        type="button"
        className="flex gap-2 items-center hover:cursor-pointer w-full justify-center md:justify-start"
        onClick={() => handleSetCurrentCategory(id)}
      >
      <Image
        src={`/assets/img/${icon}.png`}
        alt={`${name} icon`}
        width={50}
        height={50}
      />
        <span className='hidden md:block text-2xl font-medium'>
          {name}
        </span>
      </button>
    </div>
  );
};

export default Category;
