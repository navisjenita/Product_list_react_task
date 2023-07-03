import PropTypes from 'prop-types';

export default function Filter({ handleFilterChange }) {
  const handleBrandFilterChange = (brand) => {
    handleFilterChange({ brand });
  };

  const handleCategoryFilterChange = (category) => {
    handleFilterChange({ category });
  };

  const handlePriceFilterChange = (price) => {
    handleFilterChange({ price });
  };

  return (
    <>
     
      <div className="brand">
        <h3 className='filter-heading'>Brand</h3>
        <ul>
          <li>
            <input type="checkbox" id="brand-a-checkbox" onChange={() => handleBrandFilterChange('Brand A')} />
            <label htmlFor="brand-a-checkbox">Brand A</label>
          </li>
          <li>
            <input type="checkbox" id="brand-b-checkbox" onChange={() => handleBrandFilterChange('Brand B')} />
            <label htmlFor="brand-b-checkbox">Brand B</label>
          </li>
        
        </ul>
      </div>

     
      <div>
        <div className="horizontal-line"></div>
      </div>
      <div className="brand">
        <h3 className='filter-heading'>Category</h3>
        <ul>
          <li>
            <input type="checkbox" id="category-a-checkbox" onChange={() => handleCategoryFilterChange('Category A')} />
            <label htmlFor="category-a-checkbox">Category A</label>
          </li>
          <li>
            <input type="checkbox" id="category-b-checkbox" onChange={() => handleCategoryFilterChange('Category B')} />
            <label htmlFor="category-b-checkbox">Category B</label>
          </li>
         
        </ul>
      </div>

      <div>
        <div className="horizontal-line"></div>
      </div>
      <div className="brand">
        <h3 className='filter-heading'>Price</h3>
        <ul>
          <li>
            <input type="checkbox" id="price-100-checkbox" onChange={() => handlePriceFilterChange('< $100')} />
            <label htmlFor="price-100-checkbox">&lt; $100</label>
          </li>
          <li>
            <input type="checkbox" id="price-200-checkbox" onChange={() => handlePriceFilterChange('$100-$199')} />
            <label htmlFor="price-200-checkbox"> $100-$199</label>
          </li>
         
        </ul>
      </div>
    </>
  );
}

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};