import Care from './Care'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, isBestSale, water, light }) {
	return (
		<li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<Care careType='water' value={water} />
				<Care careType='light' value={light} />
			</div>
		</li>
	)
}

export default PlantItem
