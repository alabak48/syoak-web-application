import React from 'react';
import AvatarJessica from "../../assets/AvatarJessica.svg";

const SalesTable = () => {
    const data = [
        {id: '01', provider: 'CHEVRON', stats: '$1.58(+2.1%)'},
        {id: '02', provider: 'SHELL', stats: '$1.58(+2.1%)'},
        {id: '03', provider: 'TOTAL', stats: '$1.58(+2.1%)'},
        {id: '04', provider: 'REPSOL', stats: '$1.58(+2.1%)'},
        {id: '05', provider: 'INA', stats: '$1.58(+2.1%)'},
        {id: '06', provider: 'SHELL', stats: '$1.58(+2.1%)'},
        {id: '07', provider: 'TOTAL', stats: '$1.58(+2.1%)'},
        {id: '08', provider: 'CHEVRON', stats: '$1.58(+2.1%)'},
        {id: '09', provider: 'INA', stats: '$1.58(+2.1%)'},
    ];

    const imgSrc = AvatarJessica;
    const imgAlt = 'Jessica Avatar';
    const name = 'Jessica Smith';
    const message = 'Good Morning!';

    return (
        <section className="sales">
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
                <table className="messages__container--monthly">
                    <tbody>
                    {Array.from({length: 5}).map((_, index) => (
                        <tr className="messages">
                            <td className="messages__img">
                                <img src={imgSrc} alt={imgAlt}/>
                            </td>
                            <td className="messages__name">
                                {name}
                                <p className="messages__text">{message}</p>
                            </td>
                            <td className="messages__time">
                                32MIN
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default SalesTable;
