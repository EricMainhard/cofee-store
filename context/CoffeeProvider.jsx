import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const CoffeeContext = createContext();

const CoffeeProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');

  const router = useRouter();

  const getCategories = async () => {
    const { data } = await axios.get('/api/categories');
    setCategories(data);
  };

  const handleSetCurrentCategory = (cat) => {
    let category = categories.find(( category => category.id === cat));
    setCurrentCategory(category);
    router.push('/');
  }

  const handleSetProduct = (product) => {
    setSelectedProduct(product)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  const handleAddProductToCart = (product) => {
    if (order.some( prod => prod.id === product.id)){
      let updateOrder = order.map( prod => prod.id === product.id ? product : prod);
      setOrder(updateOrder);
      toast.success('Product updated', {
        icon: '🥯'
      });
    } else {
      setOrder([...order, product]);
      toast.success('Product added to cart',{
        icon: '🥐'
      });
    }

    setModal(false);
  }

  const handleUpdateQuantity = (id) => {
    let productToUpdate = order.filter( prod => prod.id === id);
    handleSetProduct(productToUpdate[0]);
    handleChangeModal();
  }

  const handleRemoveProduct = (product) => {
    let newOrder = order.filter( prod => prod.id !== product.id);
    setOrder(newOrder);
  }

  const handleChangeStep = (step) => {
    setStep(step);
  }

  const handleCompleteOrder = async (e, order, name, total, date) => {
    e.preventDefault();
    try{
        const data = await axios.post('/api/orders', {
          order, name, total, date
        });
        handleSetProduct({});
        setOrder([]);
        handleChangeStep(1);
        setName("");
        router.push('/');
        toast.success('Yeay!! Order complete');
    } catch(e){
        console.log(e);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(()=>{
    setCurrentCategory(categories[0]);
  }, [categories])

  return (
    <CoffeeContext.Provider
      value={{
        categories,
        currentCategory,
        handleSetCurrentCategory,
        selectedProduct,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleAddProductToCart,
        order,
        step,
        handleChangeStep,
        handleRemoveProduct,
        handleUpdateQuantity,
        name,
        setName,
        handleCompleteOrder
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export { CoffeeProvider };
export default CoffeeContext;
