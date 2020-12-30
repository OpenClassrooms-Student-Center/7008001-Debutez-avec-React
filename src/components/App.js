import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
// import QuestionForm from './QuestionForm'
import ShoppingList from './ShoppingList'

import '../styles/App.css'

function App() {
	const [cart, updateCart] = useState(0)
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* <QuestionForm /> */}
			<div className='lmj-layout'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
		</div>
	)
}

export default App
