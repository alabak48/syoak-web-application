import React from 'react';
import Jessica from "../../assets/Jessica.svg";

const SalesTable = () => {
    const data = [
        { id: '01', provider: 'CHEVRON', stats: '$1.58(+2.1%)' },
        { id: '02', provider: 'SHELL', stats: '$1.58(+2.1%)' },
        { id: '03', provider: 'TOTAL', stats: '$1.58(+2.1%)' },
        { id: '04', provider: 'REPSOL', stats: '$1.58(+2.1%)' },
        { id: '05', provider: 'INA', stats: '$1.58(+2.1%)' },
        { id: '06', provider: 'SHELL', stats: '$1.58(+2.1%)' },
        { id: '07', provider: 'TOTAL', stats: '$1.58(+2.1%)' },
        { id: '08', provider: 'CHEVRON', stats: '$1.58(+2.1%)' },
        { id: '09', provider: 'INA', stats: '$1.58(+2.1%)' },
    ];

    const imgSrc = Jessica;
    const imgAlt = 'Jessica Avatar';
    const list = 'Jessica Smith';
    const name = 'Good Morning!';

    return (
        <section className="right-sidebar">
            <div className="sales__container">
                <h3 className="sales__header">Sales Report</h3>
                <table className="sales__table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>PROVIDER</th>
                        <th>STATS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td className="sales__col--id">{row.id}</td>
                            <td className="sales__col--prov">{row.provider}</td>
                            <td className="sales__col--num">{row.stats}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="messages__container">
                <h5 className="messages__header">Messages</h5>
                {Array.from({length: 5}).map((_, index) => (
                    <div className="messages-monthly__container">
                        <div className="messages__img">
                            <img src={imgSrc} alt={imgAlt}/>
                        </div>
                        <div className="messages__span--list">
                            <span>{list}</span>
                            <p className="messages__text--name">{name}</p>
                        </div>
                        <div className="messages__text">
                            <span>32MIN</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SalesTable;
