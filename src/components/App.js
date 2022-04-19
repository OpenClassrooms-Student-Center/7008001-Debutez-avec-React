import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
// import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

import '../styles/App.css'

function App() {
	const [cart, updateCart] = useState(0)
	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>

			{/* <Cart /> */}
			<ShoppingList />
			<Footer />
		</div>
	)
}

export default App
