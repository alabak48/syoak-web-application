import Clock from "../../assets/Clock.svg"
import Document from "../../assets/Document.svg"
import Graph from "../../assets/Graph.svg"
import Admin from "../../assets/Admin.svg"
import SyoakLogo from "../../assets/SyoakLogo.svg"
import "../../postcss/styles.css"
import {useNavigate} from "react-router";


function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <div className="sidebar__item sidebar__item--logo" onClick={() => navigate("/")}>
                <img src={SyoakLogo} alt="Logo"/>
            </div>
            <div className="sidebar__item sidebar__item--one" onClick={() => navigate("/admin")}>
                <img src={Clock} alt="Clock" />
            </div>
            <div className="sidebar__item sidebar__item--two" onClick={() => navigate("/create")}>
                <img src={Document} alt="Document" />
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