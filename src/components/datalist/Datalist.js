import React, {useState} from 'react';
import "../../postcss/styles.css"
import Ina from "../../assets/Ina.svg"
import {IoIosArrowForward, IoIosArrowBack, IoIosArrowDown} from 'react-icons/io';
import Filter from "../../assets/Filter.svg"
import {IoIosAddCircle} from 'react-icons/io'

const Datalist = (props) => {
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
        dropdownMenu: '...',
    };

    const itemsPerPage = 8;
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
            <div className="datalist__heading">
                <div className="datalist__heading--left">
                    <h2>Datalist</h2>
                    <span className="datalist__total">{totalItems} total</span>
                    <span className="datalist__sort">Sort by:<button className="datalist__btn--sort">Fuel Type
                        <IoIosArrowDown/></button></span>
                </div>
                <div className="datalist__heading--right">
                    <button className="datalist__btn--filter"><img src={Filter} alt="Filter Icon"/>Filter</button>
                    <button className="datalist__btn--add"><IoIosAddCircle />Fuel</button>
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
