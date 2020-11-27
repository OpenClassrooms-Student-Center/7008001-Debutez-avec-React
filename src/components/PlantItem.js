import Care from './Care'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<Care careType='water' care={water} />
				<Care careType='light' care={light} />
			</div>
		</li>
	)
}

export default PlantItem
