function Care({ value, careType }) {
	const scale = [1, 2, 3]
	const scaleType = careType === 'light' ? '☀️' : '💧'

	return (
		<div>
			{scale.map((elem) =>
				value >= elem ? <span key={elem.toString()}>{scaleType}</span> : null
			)}
		</div>
	)
}

export default Care
