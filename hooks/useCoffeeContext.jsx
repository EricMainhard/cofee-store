import { useContext } from 'react';
import CoffeeContext from '@/context/CoffeeProvider';

export const useCoffeeContext = () => {
  return useContext(CoffeeContext);
};
