
import './card.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import myImage from '../src/assets/1.jpg';
import myImage1 from '../src/assets/2.jpg';
import myImage2 from '../src/assets/13.jpg';
import myImage3 from '../src/assets/4.jpeg';
import myImage4 from '../src/assets/5.jpg';
import myImage5 from '../src/assets/6.jpg';
import myImage6 from '../src/assets/7.jpg';
import myImage7 from '../src/assets/8.jpg';
import StarRatings from 'react-star-ratings';
// import { cards } from './card.jsx';

const cards = [
  {
    id: 1,
    image: myImage,
    title: ' Boat HeadPhones..',
    category: 'Decoration',
    price: '$13.5',
    brand: 'Brand A',
    ratings:'4.5',
    discount:"25% "
    // icons:<FontAwesomeIcon icon={faStar} />
  },
  {
    id: 2,
    image: myImage1,
    title: '   AppleWatch..',
    category: 'Decoration',
    price: '$43.5',
    brand: 'Brand B',
    ratings:'4',
    discount:"25% "
  },
  {
    id: 3,
    image: myImage2,
    title: ' Clock Alarm..',
    category: 'Electronics',
    price: '$99.9',
    brand: 'Brand C',
    ratings:'3.5',
    discount:"35% "
  },
  {
    id: 4,
    image: myImage3,
    title: 'Elegnant Camera..',
    category: 'Decoration',
    price: '$29.99',
    brand: 'Brand A',
    ratings:'3',
    discount:"32% "
  },
  {
    id: 5,
    image: myImage4,
    title: 'Elegnant Tv..',
    category: 'Electronics',
    price: '$79.9',
    brand: 'Brand B',
    ratings:'4.9',
    discount:"28% "
  },
  {
    id: 6,
    image: myImage5,
    title: 'Camera',
    category: 'Decoration',
    price: '$15.99',
    brand: 'Brand A',
    ratings:'4.3',
    discount:"22% "
  },
  {
    id: 7,
    image: myImage6,
    title: 'Makeup-set..',
    category: 'MAkeup',
    price: '$59.9',
    brand: 'Brand C',
    ratings:'4',
    discount:"20% "
  },
  {
    id: 8,
    image: myImage7,
    title: 'Vivo Phone..',
    category: 'Decoration',
    price: '$25.99',
    brand: 'Brand B',
    ratings:'3.5',
    discount:"18% "
  },
  // Add more card objects as needed
];


export default function FilterableCard({ searchQuery }) {
  const [filteredCards, setFilteredCards] = useState(cards);

  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const filtered = cards.filter(card => card.title.toLowerCase().includes(searchQuery?.toLowerCase() || ''));
    setFilteredCards(filtered);
  }, [searchQuery]);

  const handleSortChange = () => {
    const sortedCards = [...filteredCards].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) {
        return sortOrder === "asc" ? -1 : 1;
      } else if (titleA > titleB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  
    setFilteredCards(sortedCards);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  
  const handleFilterChange = (filterType, value) => {
    let updatedFilters = { ...filters };
    if (filterType === 'brand') {
      const selectedBrands = updatedFilters.brand || []; // Array of selected brands
      if (selectedBrands.includes(value)) {
        // If the brand is already selected, remove it
        updatedFilters.brand = selectedBrands.filter(brand => brand !== value);
      } else {
        // If the brand is not selected, add it
        updatedFilters.brand = [...selectedBrands, value];
      }
    } else if (filterType === 'price') {
      updatedFilters.price = value;
    } else {
      updatedFilters[filterType] = value;
    }

    const filtered = cards.filter((card) => {
      for (let key in updatedFilters) {
        if (key === 'brand') {
          // Check if the card contains all the selected brands
          if (updatedFilters.brand.length > 0 && !updatedFilters.brand.every(brand => card.brand === brand)) {
            return false;
          }
        }
        else if (key === 'price') {
          // Check if the card's price falls within the selected range
          const priceRange = updatedFilters.price;
          if (priceRange === '$0-$50' && !(parseFloat(card.price.slice(1)) <= 50)) {
            return false;
          } else if (priceRange === '$60-$120' && !(parseFloat(card.price.slice(1)) >= 60 && parseFloat(card.price.slice(1)) <= 120)) {
            return false;
          }


        } else {
          if (updatedFilters[key] && card[key] !== updatedFilters[key]) {
            return false;
          }
        }
      }
      return true;
    });

    setFilteredCards(filtered);
    setFilters(updatedFilters);
  };



  return (
    <div className='main'>
      <div className='left-one'>
        <div className='main-component'>
          <div className='header'>
            <h2 className='filter'>Filter</h2>
            <span><FontAwesomeIcon icon={faBars} /></span>
          </div>
          
          <div className="brand">
            <h3 className='filter-heading'>Brand</h3>
            <ul>
              <li>
                <input type="checkbox" id="brandA-checkbox" onChange={(e) => handleFilterChange('brand', 'Brand A')} />
                <label htmlFor="brandA-checkbox">Brand A</label>
              </li>
              <li>
                <input type="checkbox" id="brandB-checkbox" onChange={(e) => handleFilterChange('brand', 'Brand B')} />
                <label htmlFor="brandB-checkbox">Brand B</label>
              </li>
              <li>
                <input type="checkbox" id="brandc-checkbox" onChange={(e) => handleFilterChange('brand', 'Brand C')} />
                <label htmlFor="brandc-checkbox">Brand c</label>
              </li>

            </ul>
          </div>
          
          <div className="category">
            <h3 className='filter-heading'>Category</h3>
            <ul>
              <li>
                <input type="checkbox" id="decoration-checkbox" onChange={(e) => handleFilterChange('category', 'Decoration')} />
                <label htmlFor="decoration-checkbox">Decoration</label>
              </li>
              <li>
                <input type="checkbox" id="electronics-checkbox" onChange={(e) => handleFilterChange('category', 'Electronics')} />
                <label htmlFor="electronics-checkbox">Electronics</label>
              </li>
              <li>
                <input type="checkbox" id="electronics-checkbox" onChange={(e) => handleFilterChange('category', 'Makeup')} />
                <label htmlFor="electronics-checkbox">Makeup</label>
              </li>
              {/* Add more category options as needed */}
            </ul>
          </div>
          
          <div className="price">
            <h3 className='filter-heading'>Price</h3>
            <ul>
              <li>
                <input type="checkbox" id="price-1-checkbox" onChange={(e) => handleFilterChange('price', '$0-$50')} />
                <label htmlFor="price-1-checkbox">$0-$50</label>
              </li>
              <li>
                <input type="checkbox" id="price-2-checkbox" onChange={(e) => handleFilterChange('price', '$60-$120')} />
                <label htmlFor="price-2-checkbox">$60-$120</label>
              </li>
              {/* Add more price options as needed */}
            </ul>
          </div>
        </div>
      </div>
      <div className='right-one'>
        <div className='heading'>
          <h2>Home</h2>
          <h2>/</h2>
          <h2>Home decoration</h2>
          <h2>/</h2>
          <h2>Artificial</h2>
           <div className='sorting'>
          <select className="dropdown" onChange={handleSortChange}>
            <option>Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
          </div>


        </div>

        <div className="cards-container">
          {filteredCards.map(card => (
            <div className="card" key={card.id}>
              <div className="image">
                <img className='image-card' src={card.image} alt="Card Image" style={{ height: '180px', width: '205.8px' }} />
              </div>
              <div className="title">
                <h1>{card.title}</h1>
              </div>
              <div className="des">
                <p>{card.category}</p>
                <p className='star' style={{marginTop: '1em'}}><StarRatings rating={parseFloat(card.ratings) } starRatedColor="yellow" starDimension="25px"/></p>
                {/* <p>{card.ratings}</p> */}
                <button className='btn'><span>{card.price}</span><span className='span1'>{card.price}</span><span className='span2'>{card.discount}off</span></button>
                {/* <p>{ searchQuery }</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

