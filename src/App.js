import React from "react";
import Home from "./pages/HomePage";
import Admin from "./pages/AdminPage.js";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

function AppContent() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    React.useEffect(() => {
        document.body.classList.toggle("home-page", isHomePage);
    }, [isHomePage]);

    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="admin" element={<Admin />} />

                </Route>
            </Routes>
        </div>
    );
}

export default App