import React from 'react';
import {Component} from "react";
import Sidebar from "../components/sidebar/Sidebar";
import AdminNavigation from "../components/adminnavigation/AdminNavigation";
import Datalist from "../components/datalist/Datalist";

class CreatePage extends Component {
    render() {
        return (
            <>
                <Sidebar/>
                <AdminNavigation/>
                <Datalist />
            </>
        )
    }
}
export default CreatePage;
