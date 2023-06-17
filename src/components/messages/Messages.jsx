import React from "react";
import AvatarJessica from "../../assets/AvatarJessica.svg";

const Messages = () => {
    const imgSrc = AvatarJessica;
    const imgAlt = 'Jessica Avatar';
    const name = 'Jessica Smith';
    const message = 'Good Morning!';
    return (
        <section className="messages">
            <div className="messages__container">
                <h5 className="messages__header">Messages</h5>
                <table className="messages__table">
                    <tbody>
                    {Array.from({length: 5}).map((_, index) => (
                        <tr className="messages__row">
                            <td className="messages__data messages__data--first">
                                <img src={imgSrc} alt={imgAlt}/>
                            </td>
                            <td className="messages__data--second">
                                {name}
                                <p className="messages__text">{message}</p>
                            </td>
                            <td className="messages__data--third">
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

export default Messages;
