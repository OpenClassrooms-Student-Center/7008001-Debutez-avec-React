import { plantList } from '../datas/plantList'
import Care from './Care'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.isBestSale && <span>🔥</span>}
						{plant.name}
						<Care careType='water' value={plant.water} />
						<Care careType='light' value={plant.light} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
