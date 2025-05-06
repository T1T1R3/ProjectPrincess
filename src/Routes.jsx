import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import DisneyPage from "./components/DisneyPage";
import BarbiePage from "./components/BarbiePage";
import GhibliPage from './components/GhibliPage';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/disney" element={<DisneyPage />} />
                <Route path="/barbie" element={<BarbiePage />} />
                <Route path="/ghibli" element={<GhibliPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;