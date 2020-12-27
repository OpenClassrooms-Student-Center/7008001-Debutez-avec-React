import { useEffect, useState } from 'react'

function Time() {
	const [time, setNow] = useState(new Date())
	const seconds = time.getSeconds()
	const minutes = time.getMinutes()
	const hour = time.getHours()

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(new Date())
		}, 1000)
		return () => clearInterval(interval)
	}, [])
	return (
		<h1>
			{hour} : {minutes} : {seconds}
		</h1>
	)
}

export default Time
