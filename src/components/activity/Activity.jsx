import React from 'react';
import GreenArrow from "../../assets/GreenArrow.svg";

const Activity = () => {

    const time = '16:38';
    const imgSrc = GreenArrow;
    const imgAlt = 'green arrow';
    const list = 'Updated List';
    const name = 'John Doe';

    return (
        <section className="activity">
            <div className="activity__wrapper">
                <div className="activity__header">
                    <h5>Activity</h5>
                    <p>this month</p>
                </div>
                <table className="activity__table">
                    {Array.from({length: 5}).map((_, index) => (
                        <tr key={index} className="activity__row">
                            <td className="activity__data activity__data--first">{time}</td>
                            <td className="activity__data activity__data--second"><img src={imgSrc} alt={imgAlt}
                                                               className="activity__img--arrow"/></td>
                            <td className="activity__data activity__data--third">
                                <span className="activity__list" style={{ display: 'block'}}>{list}</span>
                                <span className="activity__name" style={{ display: 'block'}}>{name}</span>
                            </td>
                            <td className="activity__data activity__data--fourth">
                                <button className="activity__button" style={{ display: 'inline-block' }}>Price change</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </section>
    );
};

export default Activity;