import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function Care({ value, careType }) {
	const scale = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[value]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{scale.map((elem) =>
				value >= elem ? <span key={elem.toString()}>{scaleType}</span> : null
			)}
		</div>
	)
}

export default Care
