import Sidebar from "../components/sidebar/Sidebar";
import {Component} from "react";
import AdminNavigation from "../components/adminnavigation/AdminNavigation";
import SalesTable from "../components/sales/Sales";
import FuelPrices from "../components/fuelprices/FuelPrices";
import Statistics from "../components/statistics/Statistics";
import Providers from "../components/providers/Providers";

class AdminPage extends Component {
    render() {
        return (
            <>
                <Sidebar/>
                <AdminNavigation/>
                <SalesTable/>
                <FuelPrices/>
                <Statistics/>
                <Providers/>
            </>
        )
    }
}

export default AdminPage