import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { movies } from "./database/moviesBase";
import { movies as movies2 } from "./database/moviesBase2";
import { movies as movies3 } from "./database/moviesBase3";
import MainPage from "./routes/MainPage";
import MoviesPage from "./routes/MoviesPage";
import SignInPage from "./routes/SignInPage";
import Layout from "./components/Layout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SignInPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/disney" element={<MoviesPage movies={movies} />} />
          <Route path="/barbie" element={<MoviesPage movies={movies2} />} />
          <Route path="/ghibli" element={<MoviesPage movies={movies3} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
