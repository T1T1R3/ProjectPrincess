import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { movies } from "./moviesBase";
import { movies as movies2 } from "./moviesBase2";
import {movies as movies3} from "./moviesBase3";
import MainPage from "./components/MainPage";
import MoviesPage from "./components/MoviesPage";
import SignInPage from "./components/SignInPage";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/home" element={<MainPage />} />
                <Route path="/disney" element={<MoviesPage movies={movies} />} />
                <Route path="/barbie" element={<MoviesPage movies={movies2} />} />
                <Route path="/ghibli" element={<MoviesPage movies={movies3} />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;