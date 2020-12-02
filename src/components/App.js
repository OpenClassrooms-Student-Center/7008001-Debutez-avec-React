import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
// import QuestionForm from './QuestionForm'
import ShoppingList from './ShoppingList'

import '../styles/App.css'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* <QuestionForm /> */}
			<div className='lmj-layout'>
				<Cart />
				<ShoppingList />
			</div>
		</div>
	)
}

export default App
