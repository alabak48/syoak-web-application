import Clock from "../../assets/Clock.svg"
import Document from "../../assets/Document.svg"
import Graph from "../../assets/Graph.svg"
import Admin from "../../assets/Admin.svg"
import Logo from "../../assets/Logo.svg"
import "../../postcss/styles.css"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__item sidebar__item--logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="sidebar__item sidebar__item--one">
                <img src={Clock} alt="Clock"/>
            </div>
            <div className="sidebar__item sidebar__item--two">
                <img src={Document} alt="Document"/>
            </div>
            <div className="sidebar__item sidebar__item--three">
                <img src={Graph} alt="Graph"/>
            </div>
            <div className="sidebar__item sidebar__item--four">
                <img src={Admin} alt="Admin"/>
            </div>
        </div>
    )
}

export default Sidebar