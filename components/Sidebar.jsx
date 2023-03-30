import Image from 'next/image';
import Logo from '@/public/assets/img/logo-white.png';
import { useCoffeeContext } from '@/hooks/useCoffeeContext';
import { Category } from '@/components/index';

const Sidebar = () => {
  const { categories } = useCoffeeContext();
  
  return (
    <>
      <Image
        width={100}
        height={100}
        src={Logo}
        alt="Bread house"
        className="p-4"
      />

      <nav className="mt-10 flex md:block">
        {categories.map((cat) => (
          <Category key={cat.id} {...cat}/>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
