import CareScale from "./CareScale";
import '../styles/PlantItem.css';

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

function PlantItem({ cover, name, water, light, price, addToCart }) {
  return (
    <li className='lmj-plant-item'>
      <span className='lmj-plant-item-price'>{price}€</span>
      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={() => handleClick(name)} />
      {name}
      <div>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
      </div>
      <button onClick={addToCart}>Ajouter</button>
    </li>
  );
}

export default PlantItem;
