 import './filter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Filter() {
    return (

        <>
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
                            <input type="checkbox" id="number-a-checkbox" />
                            <label htmlFor="number-a-checkbox">Number A</label>
                        </li>
                        <li>
                            <input type="checkbox" id="brand2-checkbox" />
                            <label htmlFor="brand2-checkbox">Brand 2</label>
                        </li>
                        <li>
                            <input type="checkbox" id="brandc-checkbox" />
                            <label htmlFor="brandc-checkbox">Brand C</label>
                        </li>
                        <li>
                            <input type="checkbox" id="miracle-checkbox" />
                            <label htmlFor="miracle-checkbox">Miracle</label>
                        </li>
                        <li>
                            <input type="checkbox" id="empty-checkbox" />
                            <label htmlFor="empty-checkbox">Empty</label>
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
                            <input type="checkbox" id="number-a-checkbox" />
                            <label htmlFor="number-a-checkbox">Number A</label>
                        </li>
                        <li>
                            <input type="checkbox" id="brand2-checkbox" />
                            <label htmlFor="brand2-checkbox">Brand 2</label>
                        </li>
                        <li>
                            <input type="checkbox" id="brandc-checkbox" />
                            <label htmlFor="brandc-checkbox">Brand C</label>
                        </li>
                        <li>
                            <input type="checkbox" id="miracle-checkbox" />
                            <label htmlFor="miracle-checkbox">Miracle</label>
                        </li>
                        <li>
                            <input type="checkbox" id="empty-checkbox" />
                            <label htmlFor="empty-checkbox">Empty</label>
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
                            <input type="checkbox" id="number-a-checkbox" />
                            <label htmlFor="number-a-checkbox">&lt; $100</label>

                        </li>
                        <li>
                            <input type="checkbox" id="brand2-checkbox" />
                            <label htmlFor="brand2-checkbox"> $100-$199</label>
                        </li>
                        <li>
                            <input type="checkbox" id="brandc-checkbox" />
                            <label htmlFor="brandc-checkbox">$200-$599</label>
                        </li>
                        <li>
                            <input type="checkbox" id="miracle-checkbox" />
                            <label htmlFor="miracle-checkbox">$600-$999</label>
                        </li>
                        <li>
                            <input type="checkbox" id="empty-checkbox" />
                            <label htmlFor="empty-checkbox">&gt;$1000</label>
                        </li>
                    </ul>
                </div>
               


            </div>

        </>
    )
}