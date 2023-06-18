import Sidebar from "../components/sidebar/Sidebar";
import { Component } from "react";
import AdminNavigation from "../components/adminnavigation/AdminNavigation";
import SalesTable from "../components/sales/Sales";
import FuelPrices from "../components/fuelprices/FuelPrices";
import Statistics from "../components/statistics/Statistics";
import Providers from "../components/providers/Providers";
import Activity from "../components/activity/Activity";
import Messages from "../components/messages/Messages";
import "./AdminPage.css";
import {FadeInEffect} from "../components/animation/FadeInEffect";

class AdminPage extends Component {
    render() {
        return (
            <>
                <FadeInEffect>
                <div className="admin-page-container">
                    <Sidebar />
                    <div className="admin-content">
                        <AdminNavigation />
                        <div className="main-content">
                            <div className="left-column">
                                <FuelPrices />
                                <Statistics />
                            </div>
                            <div className="right-column">
                                <SalesTable />
                            </div>
                        </div>
                        <div className="bottom-content">
                            <Providers />
                            <Activity />
                            <Messages />
                        </div>
                    </div>
                </div>
                </FadeInEffect>
            </>
        );
    }
}

export default AdminPage;
