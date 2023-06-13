import HomePage from "./pages/HomePage";
import {Component} from "react";
import Sidebar from "./components/sidebar/Sidebar";
import AdminNavigation from "./components/adminnavigation/AdminNavigation";
import FuelPrices from "./components/fuelprices/FuelPrices";
import Statistics from "./components/statistics/Statistics";
import Providers from "./components/providers/Providers";
import SalesTable from "./components/sales/Sales";


class App extends Component {
    render() {
        return (<>
            <HomePage />
        </>)
    }
}

export default App