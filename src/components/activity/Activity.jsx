import React from 'react';
import GreenArrow from "../../assets/GreenArrow.svg";

const Activity = () => {

    const time = '16:38';
    const imgSrc = GreenArrow;
    const imgAlt = 'green arrow';
    const list = 'Updated List';
    const name = 'John Doe';

    return (
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
    );
};

export default Activity;