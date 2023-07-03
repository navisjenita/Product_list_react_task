import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faList, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import profileimage from '../src/assets/9.jpg'

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <>
      <div className="Header-body">
        <div className="Navbar">
          <div className="left-nav">
            <h2 className='headingclass'>kiranWorkSpace</h2>
            <div className='icon-search'>
              <input className="input-search" type="text" placeholder="search" onChange={(e) => setSearchQuery(e.target.value)} />
              <div className='icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </div>
          </div>
          <div className="right-nav">
            <div className='bar1'><FontAwesomeIcon icon={faList} /></div>
            <h5 className='categories'>Categories</h5>
            <h4 className='bell-icon'>
              <FontAwesomeIcon icon={faBell} />
            </h4>
            <div className='box'>
              <div className="profile">
                <img src={profileimage} alt="" />
              </div>
              <div>
                <h5 className='kiran' >KiranG</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}