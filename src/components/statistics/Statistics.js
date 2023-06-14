import React from 'react';
import "../../postcss/styles.css"
import 'charts.css';
import Image2 from "../../assets/img_4.svg"
import Chevron from "../../assets/Chevron.svg"
import Shell from "../../assets/Shell.svg"
import Total from "../../assets/Total.svg"
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';


const Statistics = () => {
    return (
        <section className='statistics'>
            <h5 className="statistics__header">Price Statistics</h5>
            <div className="statistics__table">
                <table id="stacked-example-3"
                       className="charts-css column hide-data show-heading show-labels show-primary-axis show-3-secondary-axes data-spacing-10 multiple stacked">
                    <tbody>
                    <tr id="table__chart--first">
                        <th scope="row">Q1</th>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                    </tr>
                    <tr id="table__chart--second">
                        <th scope="row">Q2</th>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                    </tr>
                    <tr id="table__chart--second">
                        <th scope="row">Q3</th>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                    </tr>
                    <tr id="table__chart--second">
                        <th scope="row" style={{color: "#35384D", fontWeight: 900}}>2021</th>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                    </tr>
                    <tr id="table__chart--second">
                        <th scope="row">Q1</th>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                    </tr>
                    <tr id="table__chart--second">
                        <th scope="row">Q2</th>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                    </tr>
                    <tr id="table__chart--second">
                        <th scope="row">Q3</th>
                        <td><span className="data"></span></td>
                        <td><span className="data"></span></td>
                        <td><span className="data">9</span></td>
                    </tr>
                    </tbody>
                    <div className="statistics__text--percentages">
                        <div>
                            <div className="company-details__container">
                                <div className="company-details">
                                    <img src={Chevron} alt="Chevron logo"/>
                                    <span className="statistics-company__name">CHEVRON</span>
                                    <AiOutlineArrowDown className="prices__text--percentage--red"/><span
                                    className="prices__text--percentage--red">-6%</span>

                                </div>
                            </div>
                            <div className="percentage">
                                <span>1.80$</span>
                            </div>
                        </div>

                        <div>
                            <div className="company-details__container">
                                <div className="company-details">
                                    <img src={Shell} alt="Shell logo"/>
                                    <span className="statistics-company__name ">SHELL</span>
                                    <AiOutlineArrowUp className="prices__text--percentage--green"/><span
                                    className="prices__text--percentage--green">-11%</span>
                                </div>
                            </div>
                            <div className="percentage">
                                <span>$1.92</span>
                            </div>
                        </div>

                        <div>
                            <div className="company-details__container">
                                <div className="company-details">
                                    <img src={Total} alt="Total logo"/>
                                    <span className="statistics-company__name">TOTAL</span>
                                    <AiOutlineArrowUp className="prices__text--percentage--green"/><span
                                    className="prices__text--percentage--green">+6%</span>
                                </div>
                            </div>
                            <div className="percentage">
                                <span>$1.88</span>
                            </div>
                        </div>
                    </div>
                </table>
            </div>
            <div>
                <div className="statistics-img__container">
                    <img src={Image2} alt="Gas pump" className="statistics__img--inner"/>
                    <caption className="statistics__cap">Find the best gas prices in your state to
                        maximize savings at the pump.
                    </caption>
                    <button className="statistics__btn">Find Prices</button>
                </div>
            </div>
        </section>

    )
        ;
};

export default Statistics;