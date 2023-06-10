import Clock from "../../assets/Clock.svg"
import Document from "../../assets/Document.svg"
import Graph from "../../assets/Graph.svg"
import Admin from "../../assets/Admin.svg"
import Logo from "../../assets/Logo.svg"
import "./Sidebar.css"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__item sidebar__item--logo">
                <a>
                    <img src={Logo} alt="Logo"/>
                </a>
            </div>
            <div className="sidebar__item sidebar__item--one">
                <a>
                    <img src={Clock} alt="Clock"/>
                </a>
            </div>
            <div className="sidebar__item sidebar__item--two">
                <a>
                    <img src={Document} alt="Document" />
                </a>
            </div>
            <div className="sidebar__item sidebar__item--three">
                <a>
                    <img src={Graph} alt="Graph"/>
                </a>
            </div>
            <div className="sidebar__item sidebar__item--four">
                <a>
                    <img src={Admin} alt="Admin"/>
                </a>
            </div>

        </div>
    )
}

export default Sidebar