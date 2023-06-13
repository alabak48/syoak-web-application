import React from 'react';
import "../../styles/styles.css"
import 'charts.css';
import Image2 from "../../assets/img_4.svg"
import Chevron from "../../assets/Chevron.svg"
import Shell from "../../assets/Shell.svg"
import Total from "../../assets/Total.svg"
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';


const Statistics = () => {
    return (

        <section className='statistics'>
            <div>
                <h5>Price Statistics</h5>
                <div className="statistics__table">
                    <table id="stacked-example-3"
                           className="charts-css column hide-data show-heading show-labels show-primary-axis show-3-secondary-axes data-spacing-10 multiple stacked">
                        <thead>
                        <tr>
                            <th scope="col">Continent</th>
                            <th scope="col">#1</th>
                            <th scope="col">#2</th>
                            <th scope="col">#3</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Q1</th>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                        </tr>
                        <tr>
                            <th scope="row">Q2</th>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                        </tr>
                        <tr>
                            <th scope="row">Q3</th>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                        </tr>
                        <tr>
                            <th scope="row" style={{color: "#35384D", fontWeight: 900}}>2021</th>
                            <td><span className="data">20$</span></td>
                            <td><span className="data">20$</span></td>
                            <td><span className="data">20$</span></td>
                        </tr>
                        <tr>
                            <th scope="row">Q1</th>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                        </tr>
                        <tr>
                            <th scope="row">Q2</th>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                        </tr>
                        <tr>
                            <th scope="row">Q3</th>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                            <td><span className="data"></span></td>
                        </tr>
                        </tbody>
                        <div className="statistics__text--percentages">
                            <div>
                                <div>
                                    <div className="company-details">
                                        <img src={Chevron} alt="Chevron logo"/>
                                        <span className="statistics-company__name">CHEVRON</span>
                                        <AiOutlineArrowUp/> -6%

                                    </div>
                                </div>
                                <div className="percentage">
                                    <span>1.80$</span>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className="company-details">
                                        <img src={Shell} alt="Shell logo"/>
                                        <span className="statistics-company__name">SHELL</span>
                                        <AiOutlineArrowDown/> -6%
                                    </div>
                                </div>
                                <div className="percentage">
                                    <span>$1.92</span>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className="company-details">
                                        <img src={Total} alt="Total logo"/>
                                        <span className="statistics-company__name">TOTAL</span>
                                        <AiOutlineArrowDown/> -6%
                                    </div>
                                </div>
                                <div className="percentage">
                                    <span>$1.88</span>
                                </div>
                            </div>
                        </div>
                    </table>
                    <div className="statistics-img__container">
                        <img src={Image2} alt="Gas pump" className="statistics__img--inner"/>
                        <caption className="statistics__cap">Find the best gas prices in your state to
                            maximize savings at the pump.
                        </caption>
                        <button className="statistics__btn">Find Prices</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Statistics;