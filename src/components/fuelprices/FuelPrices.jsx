import "../../postcss/styles.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import BezierLineChart from "../bezierline/BezierLine";
import { useState } from "react";

function FuelPrices() {
    const [showChart1, setShowChart1] = useState(false);
    const [showPercentage1, setShowPercentage1] = useState(true);
    const [showChart2, setShowChart2] = useState(false);
    const [showPercentage2, setShowPercentage2] = useState(true);
    const [showChart3, setShowChart3] = useState(false);
    const [showPercentage3, setShowPercentage3] = useState(true);
    const [showChart4, setShowChart4] = useState(false);
    const [showPercentage4, setShowPercentage4] = useState(true);

    const handleFuelHover1 = () => {
        setShowChart1(true);
        setShowPercentage1(false);
    };

    const handleFuelLeave1 = () => {
        setShowChart1(false);
        setShowPercentage1(true);
    };

    const handleFuelHover2 = () => {
        setShowChart2(true);
        setShowPercentage2(false);
    };

    const handleFuelLeave2 = () => {
        setShowChart2(false);
        setShowPercentage2(true);
    };

    const handleFuelHover3 = () => {
        setShowChart3(true);
        setShowPercentage3(false);
    };

    const handleFuelLeave3 = () => {
        setShowChart3(false);
        setShowPercentage3(true);
    };

    const handleFuelHover4 = () => {
        setShowChart4(true);
        setShowPercentage4(false);
    };

    const handleFuelLeave4 = () => {
        setShowChart4(false);
        setShowPercentage4(true);
    };

    return (
        <section className='prices'>
            <div
                className="prices__fuel prices__fuel--diesel"
                onMouseEnter={handleFuelHover1}
                onMouseLeave={handleFuelLeave1}
            >
                <h2>Diesel Fuel</h2>
                <p className="prices__text--price">$1.96</p>
                <p className="prices__text--avg-price">AVG PRICE</p>
                {showPercentage1 && (
                    <p className="prices__text--percentage--green">
                        <AiOutlineArrowDown className="price__arrow--green" />-6%
                    </p>
                )}
                {showChart1 && <BezierLineChart />}
            </div>
            <div
                className="prices__fuel prices__fuel--diesel"
                onMouseEnter={handleFuelHover2}
                onMouseLeave={handleFuelLeave2}
            >
                <h2>Diesel Fuel</h2>
                <p className="prices__text--price">$1.96</p>
                <p className="prices__text--avg-price">AVG PRICE</p>
                {showPercentage2 && (
                    <p className="prices__text--percentage--green">
                        <AiOutlineArrowDown className="price__arrow--green" />-6%
                    </p>
                )}
                {showChart2 && <BezierLineChart />}
            </div>
            <div
                className="prices__fuel prices__fuel--autogas"
                onMouseEnter={handleFuelHover3}
                onMouseLeave={handleFuelLeave3}
            >
                <h2>Autogas</h2>
                <p className="prices__text--price">$0.98</p>
                <p className="prices__text--avg-price">AVG PRICE</p>
                {showPercentage3 && (
                    <p className="prices__text--percentage--red">
                        <AiOutlineArrowUp className="price__arrow--red" />
                        +2%
                    </p>
                )}
                {showChart3 && <BezierLineChart />}
            </div>
            <div
                className="prices__fuel prices__fuel--oil"
                onMouseEnter={handleFuelHover4}
                onMouseLeave={handleFuelLeave4}
            >
                <h2>Fuel Oil</h2>
                <p className="prices__text--price">$.74</p>
                <p className="prices__text--avg-price">AVG PRICE</p>
                {showPercentage4 && (
                    <p className="prices__text--percentage--red">
                        <AiOutlineArrowUp className="price__arrow--red" />
                        +2%
                    </p>
                )}
                {showChart4 && <BezierLineChart />}
            </div>
        </section>
    );
}

export default FuelPrices;
