import '../styles/Categories.css';
import restoreIcon from '../assets/images/restore.svg';

function Categories({ activeCategory, setActiveCategory, categories }) {
  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  const handleReset = () => {
    const confirmReset = window.confirm("Êtes-vous sûr de vouloir réinitialiser la catégorie ?");
    if (confirmReset) {
      setActiveCategory('');
    }
  };

  return (
    <div className='lmj-category-selection'>
      <select
        id='lmj-category-select'
        value={activeCategory}
        onChange={handleCategoryChange}
        className='lmj-category-select'
        aria-label='Sélectionnez une catégorie'
      >
        <option value=''>Sélectionnez une catégorie</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={handleReset}>
        <img src={restoreIcon} alt={restoreIcon} />
      </button>
    </div>
  );
}

export default Categories;
