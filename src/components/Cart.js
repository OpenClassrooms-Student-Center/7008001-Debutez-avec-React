import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const monsteraPrice = 8

	const [isOpen, setIsOpen] = useState(true)

	if (!isOpen) {
		return (
			<div className='lmj-cart-closed'>
				<button
					className='lmj-cart-toggle-button'
					onClick={() => setIsOpen(true)}
				>
					Ouvrir le Panier
				</button>
			</div>
		)
	}

	const items = Object.keys(cart)

	return (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{items.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{items.map((item) => (
							<li key={item}>
								{cart[item]?.amount} {item} {cart[item]?.price}€
							</li>
						))}
					</ul>
					<h3>
						Total :{' '}
						{items.reduce(
							(acc, item) => acc + cart[item].amount * cart[item].price,
							0
						)}
						€
					</h3>
					<button onClick={() => updateCart({})}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	)
}

export default Cart
