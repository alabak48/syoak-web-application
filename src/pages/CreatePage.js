import React from 'react';
import {Component} from "react";
import Sidebar from "../components/sidebar/Sidebar";
import AdminNavigation from "../components/adminnavigation/AdminNavigation";
import Datalist from "../components/datalist/Datalist";
import {FadeInEffect} from "../components/animation/FadeInEffect";

class CreatePage extends Component {
    render() {
        return (
            <>
                <FadeInEffect>
                <Sidebar/>
                <AdminNavigation/>
                <Datalist />
                </FadeInEffect>
            </>
        )
    }
}
export default CreatePage;
