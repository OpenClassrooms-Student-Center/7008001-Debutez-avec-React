import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function Care({ value, careType }) {
	const scale = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div>
			{scale.map((elem) =>
				value >= elem ? <span key={elem.toString()}>{scaleType}</span> : null
			)}
		</div>
	)
}

export default Care
