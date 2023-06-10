import "../../styles/styles.css"
import Notifications from "../../assets/Notifications.svg"
import Avatar from "../../assets/Avatar.svg"
import {BsSearch} from 'react-icons/bs';


function AdminNavigation() {
    return (
        <header>
            <div className="admin-navigation">
                <div className="admin-navigation__item admin-navigation__item--searchbar">
                    <div className="searchbar">
                        <div className="search-icon">
                            <BsSearch style={{width: 10, marginLeft: 10}}/>
                        </div>
                        <input type="text" className="search-input" placeholder="Search"/>
                    </div>
                </div>
                <div className="admin-navigation__item admin-navigation__item--notification">
                    <img src={Notifications} alt="Notification bell"/>
                </div>
                <div className="admin-navigation__item admin-navigation__item--admin">
                    <img src={Avatar} alt="Avatar"/>
                </div>
            </div>
        </header>
    )
}

export default AdminNavigation