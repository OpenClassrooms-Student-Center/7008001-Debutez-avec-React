import cartIcon from '../assets/images/cart.svg';
import closeIcon from '../assets/images/left-arrow.svg';
import { useEffect } from 'react';
import '../styles/Cart.css';

function Cart({ cart, updateCart, isOpen, setIsOpen }) {
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  useEffect(() => {
    document.title = `La maison jungle | ${total}€ d'achats`;
  }, [total]);

  return isOpen ? (
    <div className='lmj-cart'>
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(false)}
      >
        <img src={closeIcon} alt={closeIcon} />
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`} >
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button className='lmj-cart-button-clean' onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <p>Votre panier est vide</p>
      )}
    </div>
  ) : (
      <button
        className='lmj-cart-open'
        onClick={() => setIsOpen(true)}
      >
        <img src={cartIcon} alt={cartIcon} />
      </button>
  );
}

export default Cart;
