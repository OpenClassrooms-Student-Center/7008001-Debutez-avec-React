import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/images/logo.png';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import '../styles/Layout.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />
        <ShoppingList cart={cart} updateCart={updateCart} isCartOpen={isOpen} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
