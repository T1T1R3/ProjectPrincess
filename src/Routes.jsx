import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;