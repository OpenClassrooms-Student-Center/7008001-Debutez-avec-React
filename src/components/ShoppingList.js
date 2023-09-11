import { useState } from "react";
import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';
import Categories from "./Categories";
import PlantItem from "./PlantItem";

function ShoppingList({ cart, updateCart, isCartOpen }) {
  const [activeCategory, setActiveCategory] = useState('');
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 }
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }
  return (
    <div className={`lmj-shopping-list ${isCartOpen ? 'with-cart' : ''}`}>
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />
      <ul className='lmj-plant-list'>
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
                addToCart={() => addToCart(name, price)}
              />
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
