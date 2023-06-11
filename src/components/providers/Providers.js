import React from 'react';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import Location from "../../assets/Shape.svg";
import GreenArrow from "../../assets/GreenArrow.svg";
import "../../styles/styles.css";
import InaLogo from "../../assets/Ina.svg";
import ShellLogo from "../../assets/Shell.svg";
import RepsolLogo from "../../assets/Repsol.svg";
import TotalLogo from "../../assets/Total.svg";
import ChevronLogo from "../../assets/Chevron.svg";

const ProvidersComponent = () => {
    const providersData = [
        {
            providerImgSrc: InaLogo,
            providerAltText: 'Ina logo',
            ProviderName: 'INA d.d.',
            CityCountry: 'Zagreb, Croatia',
        },
        {
            providerImgSrc: ShellLogo,
            providerAltText: 'Shell logo',
            ProviderName: 'Shell',
            CityCountry: 'The Hague, Netherlands',
        },
        {
            providerImgSrc: RepsolLogo,
            providerAltText: 'Repsol logo',
            ProviderName: 'Repsol',
            CityCountry: 'Madrid, Spain',
        },
        {
            providerImgSrc: TotalLogo,
            providerAltText: 'Total logo',
            ProviderName: 'Total',
            CityCountry: 'Courbevoie, France',
        },
        {
            providerImgSrc: ChevronLogo,
            providerAltText: 'Chevron logo',
            ProviderName: 'Chevron',
            CityCountry: 'San Ramon, United States',
        },
        {
            providerImgSrc: InaLogo,
            providerAltText: 'Ina logo',
            ProviderName: 'INA d.d.',
            CityCountry: 'Zagreb, Croatia',
        },
    ];

    const time = '16:38';
    const imgSrc = GreenArrow;
    const imgAlt = 'green arrow';
    const list = 'Updated List';
    const name = 'John Doe';

    return (
        <section className="providers-activity__section">
            <div className='providers-activity'>
                <div className="providers__container">
                    <h5>Oil & Gas Providers</h5>
                    <div className="providers-list">
                        {providersData.map((provider, index) => (
                            <div className="providers-name__container" key={index}>
                                <div className="providers-name__container--left">
                                    <img src={provider.providerImgSrc} alt={provider.providerAltText}
                                         className="providers-name__img"/>
                                    <h6 className="providers-name__heading">{provider.ProviderName}</h6>
                                </div>
                                <div className="providers-name__container--right">
                                    <div className="providers-name__location">
                                        <img src={Location} alt="Location shape" className="providers-name__shape"/>
                                        <p className="providers-name__paragraph">{provider.CityCountry}</p>
                                    </div>
                                </div>
                                <MdOutlineKeyboardArrowDown className="providers-name__svg"/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="activity__container">
                    <div className="activity__header">
                        <h5>Activity</h5>
                        <p className="activity__header--month">this month</p>
                    </div>
                    {Array.from({length: 5}).map((_, index) => (
                        <div className="activity-monthly__container">
                            <div className="activity__text--time" key={index}>
                                <span>{time}</span>
                            </div>
                            <div className="activity__img">
                                <img src={imgSrc} alt={imgAlt}/>
                            </div>
                            <div className="activity__span--list">
                                <span>{list}</span>
                                <p className="activity__text--name">{name}</p>
                            </div>
                            <div className="activity__btn--price">
                                <button>Price change</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProvidersComponent;
