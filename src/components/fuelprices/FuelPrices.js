import "../../styles/styles.css"
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';


function FuelPrices() {
    return (
        <section className='prices'>
            <div className="prices__fuel prices__fuel--diesel">
                <h2>Diesel Fuel</h2>
                <p className="prices__text--price">$1.96</p>
                <p className="prices__text--avg-price">AVG PRICE</p>
                <p className="prices__text--percentage--green"><AiOutlineArrowDown className="price__arrow--green"/>-6%</p>
            </div>
            <div className="prices__fuel prices__fuel--motor">
                <h2>Motor Gasoline</h2>
                <p className="prices__text--price">$1.58</p>
                <p className="prices__text--avg-price">AVG PRICE</p>
                <p className="prices__text--percentage--green"><AiOutlineArrowDown className="price__arrow--green"/>-6%</p>
            </div>
            <div className="prices__fuel prices__fuel--autogas">
                <h2>Autogas</h2>
                <p className="prices__text--price">$0.98</p>
                <p className="prices__text--avg-price">AVG PRICE</p>
                <p className="prices__text--percentage--red"><AiOutlineArrowUp className="price__arrow--red"/>
                    +2%</p>
            </div>
            <div className="prices__fuel prices__fuel--oil">
                <h2>Fuel Oil</h2>
                <p className="prices__text--price">$.74</p>
                <p className="prices__text--avg-price">AVG PRICE</p>
                <p className="prices__text--percentage--red"><AiOutlineArrowUp className="price__arrow--red"/>+2%</p>
            </div>
        </section>
    )
}

export default FuelPrices