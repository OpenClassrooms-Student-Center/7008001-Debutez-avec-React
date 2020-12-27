const recoList = {
	2: `C'est le début du printemps, rempotez`,
	3: `Vous pouvez rempoter dès maintenant`,
	4: `Rempotez vite avant l'été !`
}

function Recommendation() {
	const today = new Date()
	const currentMonth = today.getMonth()
	// const isSpring =
	// 	currentMonth === 11 || currentMonth === 3 || currentMonth === 4
	// const springComponent = isSpring ? <div>Yala</div> : null
	// return <div>{recoList[currentMonth] || null}</div>
	const isSpring =
		currentMonth === 11 || currentMonth === 3 || currentMonth === 4
	if (!isSpring) {
		return null
	}
	return <div>C'est le printemps, rempotez</div>
}

export default Recommendation
