import React from 'react';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import Location from "../../assets/Shape.svg";
import "../../postcss/styles.css";
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

    return (
        <section className="providers">
            <div className="providers__wrapper">
                <h5 className="providers__heading">Oil & Gas Providers</h5>
                <table className="providers__table">
                    {providersData.map((provider, index) => (
                        <tr className="providers__row">
                            <td className="providers__data providers__data--first">
                                <img src={provider.providerImgSrc}
                                     alt={provider.providerAltText}
                                     className="providers__img--provider"/>{provider.ProviderName}
                            </td>
                            <td className="providers__data providers__data--second">
                                <img src={Location}
                                     alt="Location icon"
                                     className="providers__img--location"/>{provider.CityCountry}</td>
                            <td className="providers__data providers__data--third">
                                <button className="provider__btn">
                                    <MdOutlineKeyboardArrowDown className="providers__img--arrow"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </section>
    );
};

export default ProvidersComponent;
