import '../styles/Categories.css';

function Categories({ activeCategory, setActiveCategory, categories }) {
  return (
    <div className='lmj-categories'>
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className='lmj-categories-select'
      >
        <option value=''>---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
