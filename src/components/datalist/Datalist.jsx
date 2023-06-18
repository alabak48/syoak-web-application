import React, {useState} from 'react';
import "../../postcss/styles.css"
import Ina from "../../assets/Ina.svg"
import {IoIosArrowForward, IoIosArrowBack, IoIosArrowDown} from 'react-icons/io';
import Filter from "../../assets/Filter.svg"
import {IoIosAddCircle} from 'react-icons/io'
import DropDownMenu from "../dropdownmenu/DropDownMenu";

const Datalist = (props) => {

    const [addFuel, setAddFuel] = useState("Fuel Type");

    const handleChange = (event) => {
        setAddFuel(event.target.value);
    }

    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const data = {
        id: 1,
        inputField: <input type="checkbox" id="scales" name="scales"/>,
        providerImg: Ina,
        providerAlt: "Ina Logo",
        providerName: 'INA d.d.',
        fuelType: 'Autogas',
        fuelName: 'EUROSUPER95',
        fuelPrice: '0.75€',
        dateCreated: '31/08/2020',
        dropdownMenu: <DropDownMenu/>
    };

    const itemsPerPage = 7;
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 578;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const repeatedData = Array.from({length: 578}, (_, index) => ({...data, id: index + 1}));
    const currentPageData = repeatedData.slice(startIndex, endIndex);

    const visiblePages = 3;
    const pageButtons = [];

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    let startPage = currentPage - Math.floor(visiblePages / 2);
    if (startPage < 1) {
        startPage = 1;
    }
    let endPage = startPage + visiblePages - 1;
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - visiblePages + 1;
        if (startPage < 1) {
            startPage = 1;
        }
    }

    for (let page = startPage; page <= endPage; page++) {
        pageButtons.push(
            <button
                key={page}
                onClick={() => goToPage(page)}
                className={currentPage === page ? 'active' : ''}
            >
                {page}
            </button>
        );
    }

    return (
        <section className='datalist'>
            <div className="datalist__sidebar" style={{transform: showSidebar ? 'translateX(0)' : 'translateX(100%)'}}>
                <h5 className="sidebar__heading">Add Fuel</h5>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <input type="text" name="name" placeholder="Provider Name"
                           className="sidebar__input sidebar__input--name"/>

                    <input type="text" name="fuel type" placeholder="Fuel Name"
                           className="sidebar__input sidebar__input--fuelname"/>

                    <select value={addFuel} onChange={handleChange} className="sidebar__input sidebar__input--fueltype">
                        <option value="Fuel Type" disabled hidden>Fuel Type</option>
                        <option value="Autogas">Autogas</option>
                        <option value="Biodiesel">Biodiesel</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Gasoline">Gasoline</option>
                    </select>


                    <div className="sidebar__input--price" style={{ alignItems: 'flex-start' }}>
                        <span>Price:</span>
                        <input type="text" name="fuel price 1"/>
                        <input type="text" name="fuel price 2"/>
                    </div>


                    <div className="button-container">
                        <input type="submit" value="Save Changes" className="sidebar__btn sidebar__btn--save"/>
                        <input type="submit" value="Preview" className="sidebar__btn sidebar__btn--preview"/>
                        <input type="submit" value="Cancel" className="sidebar__btn sidebar__btn--cancel"/>
                    </div>
                </div>
            </div>
            <div className="datalist__overlay" onClick={toggleSidebar}
                 style={{display: showSidebar ? 'block' : 'none'}}></div>
            <div className="datalist__heading">
                <div className="datalist__heading--left">
                    <h2>Datalist</h2>
                    <span className="datalist__total">{totalItems} total</span>
                    <span className="datalist__sort">
                        <span>Sort by</span>
                         <select value={addFuel} onChange={handleChange} className="datalist__select" style={{
                             border: "none",
                             color: "#9DA8B6",
                             fontSize: "12px",
                             backgroundColor: "#FBFBFB"
                         }}>
                        <option value="Fuel Type" disabled hidden>Fuel Type</option>
                        <option value="Autogas">Autogas</option>
                        <option value="Biodiesel">Biodiesel</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Gasoline">Gasoline</option>
                    </select>
                        </span>
                </div>
                <div className="datalist__heading--right">
                    <button className="datalist__btn--filter"><img src={Filter} alt="Filter Icon"/>Filter</button>
                    <button className="datalist__btn--add" onClick={toggleSidebar}><IoIosAddCircle/>Add Fuel</button>
                </div>
            </div>
            <div className="datalist__table">
                <table>
                    <thead>
                    <tr>
                        <th style={{width: 80}}></th>
                        <th>Provider</th>
                        <th>Fuel Type</th>
                        <th>Fuel Name</th>
                        <th>Price</th>
                        <th>Date Created</th>
                        <th>
                            <div className="datalist__pagination">
                                <button onClick={goToPreviousPage} disabled={currentPage === 1}
                                        className="datalist__btn--previous">
                                    <IoIosArrowBack/>
                                </button>
                                {pageButtons}
                                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                                    <IoIosArrowForward/>
                                </button>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentPageData.map((item) => (
                        <tr key={item.id} className="datalist__row">
                            <td className="datalist__input">{item.inputField}</td>
                            <td className="datalist__provider"><img src={item.providerImg} alt={item.providerAlt}
                                                                    className="datalist__img"/>{item.providerName}</td>
                            <td className="datalist__type">{item.fuelType}</td>
                            <td className="datalist__name">{item.fuelName}</td>
                            <td className="datalist__price">{item.fuelPrice}</td>
                            <td className="datalist__date">{item.dateCreated}</td>
                            <td className="datalist__menu">{item.dropdownMenu}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Datalist;
