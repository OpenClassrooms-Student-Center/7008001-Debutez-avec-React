import { useState } from 'react'

function QuestionForm() {
	const [inputValue, setInputValue] = useState('Posez votre question ici')

	const isInputError = inputValue.includes('f')
	function checkValue(value) {
		if (!value.includes('f')) {
			setInputValue(value)
		}
	}
	return (
		<div>
			{isInputError && (
				<div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
			)}
			<textarea
				value={inputValue}
				onChange={(e) => checkValue(e.target.value)}
			/>

			<button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
		</div>
	)
}

export default QuestionForm
