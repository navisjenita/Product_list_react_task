import './filter.css';
import './card.css';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import myImage from '../src/assets/1.jpg';
import myImage1 from '../src/assets/2.jpg';
import myImage2 from '../src/assets/3.jpg';
import myImage3 from '../src/assets/4.jpeg';
import myImage4 from '../src/assets/5.jpg';
import myImage5 from '../src/assets/6.jpg';
import myImage6 from '../src/assets/7.jpg';
import myImage7 from '../src/assets/8.jpg';

export default function FilterableCard() {
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleFilterChange = (filterType, value) => {
    if (value) {
      const filtered = cards.filter(card => card[filterType] === value);
      setFilteredCards(filtered);
    } else {
      setFilteredCards(cards);
    }
  };

  return (
    <div className='main'>
      <div className='left-one'>
        <div className='main-component'>
          <div className='header'>
            <h2 className='filter'>Filter</h2>
            <span><FontAwesomeIcon icon={faBars} /></span>
          </div>
          <div>
            <div className="horizontal-line"></div>
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
          
            </ul>
          </div>
          <div>
            <div className="horizontal-line"></div>
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
           
            </ul>
          </div>
          <div>
            <div className="horizontal-line"></div>
          </div>
          <div className="price">
            <h3 className='filter-heading'>Price</h3>
            <ul>
              <li>
                <input type="checkbox" id="price-1-checkbox" onChange={(e) => handleFilterChange('price', '$0-$10')} />
                <label htmlFor="price-1-checkbox">$0-$10</label>
              </li>
              <li>
                <input type="checkbox" id="price-2-checkbox" onChange={(e) => handleFilterChange('price', '$10-$20')} />
                <label htmlFor="price-2-checkbox">$10-$20</label>
              </li>
            
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
        </div>

        <div className="cards-container">
          {filteredCards.map(card => (
            <div className="card" key={card.id}>
              <div className="image">
                <img src={card.image} alt="Card Image" />
              </div>
              <div className="title">
                <h1>{card.title}</h1>
              </div>
              <div className="des">
                <p>{card.category}</p>
                <button>{card.price}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const cards = [
  {
    id: 1,
    image: myImage,
    title: 'Decorative HeadPhones..',
    category: 'Decoration',
    price: '$13.5',
    brand: 'Brand A',
  },
  {
    id: 2,
    image: myImage1,
    title: 'Decorative AppleWatch..',
    category: 'Decoration',
    price: '$43.5',
    brand: 'Brand B',
  },
  {
    id: 3,
    image: myImage2,
    title: 'Electronics Speaker..',
    category: 'Electronics',
    price: '$99.9',
    brand: 'Brand C',
  },
  {
    id: 4,
    image: myImage3,
    title: 'Decorative Lamp..',
    category: 'Decoration',
    price: '$29.99',
    brand: 'Brand A',
  },
  {
    id: 5,
    image: myImage4,
    title: 'Wireless Earbuds..',
    category: 'Electronics',
    price: '$79.9',
    brand: 'Brand B',
  },
  {
    id: 6,
    image: myImage5,
    title: 'Wall Clock..',
    category: 'Decoration',
    price: '$15.99',
    brand: 'Brand A',
  },
  {
    id: 7,
    image: myImage6,
    title: 'Bluetooth Headphones..',
    category: 'Electronics',
    price: '$59.9',
    brand: 'Brand C',
  },
  {
    id: 8,
    image: myImage7,
    title: 'Decorative Vase..',
    category: 'Decoration',
    price: '$25.99',
    brand: 'Brand B',
  },
 
];