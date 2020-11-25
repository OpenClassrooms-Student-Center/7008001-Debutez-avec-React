const plantList = [
	'monstera',
	'ficus lyrata',
	'pothos argenté',
	'yucca',
	'palmier'
]

function ShoppingList() {
	return (
		<ul>
			{plantList.map((elem) => (
				<li key={elem}>{elem}</li>
			))}
		</ul>
	)
}

export default ShoppingList
