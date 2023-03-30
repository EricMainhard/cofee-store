import Head from 'next/head';
import { Sidebar, ProductModal, Steps } from '@/components/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { useCoffeeContext } from '@/hooks/useCoffeeContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

const Layout = ({ children, page }) => {

  const modalStyles = {
    content: {
      inset: '140px'
    }
  }

  const { modal, handleChangeModal } = useCoffeeContext();

  return (
    <>
      <Head>
        <title>Vegan Coffee Store - {page} </title>
        <meta name="description" content="Vegan coffee store" />
      </Head>
      <div className="md:flex px-2">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <Steps/>
          {children}
        </main>
      </div>
      {modal && <Modal isOpen={modal} style={modalStyles}>
        <ProductModal/>
      </Modal>}

      <ToastContainer/>
    </>
  );
};

export default Layout;
