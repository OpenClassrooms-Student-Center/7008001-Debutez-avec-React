import { plantList } from '../datas/plantList'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>
						{plant.name}
						{plant.bestSale && <span>🔥</span>}
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
