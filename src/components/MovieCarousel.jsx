import React, { useMemo, useEffect } from "react";
import "./style.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function MovieCarousel({ movies, searchTerm, activeMovieId, onMovieSelect }) {
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [movies, searchTerm]);

  useEffect(() => {
    if (filteredMovies.length > 0) {
      const currentSelectedExists = filteredMovies.some(
        (movie) => movie.id === activeMovieId
      );
      if (!currentSelectedExists) {
        onMovieSelect(filteredMovies[0]);
      }
    } else {
      onMovieSelect(null);
    }
  }, [filteredMovies, activeMovieId, onMovieSelect]);

  const handleMoved = (_, newIndex) => {
    const selectedMovie = filteredMovies[newIndex];
    if (selectedMovie) {
      onMovieSelect(selectedMovie);
    }
  };

  const options = {
    pagination: false,
    perPage: 3,
    focus: "center",
    arrows: true,
    gap: "0px",
    trimspace: false,
    breakpoints: {
      1024: {
        perPage: 2,
        arrows: false,
      },
      640: {
        perPage: 1,
        arrows: false,
      },
    },
  };

  return (
    <Splide options={options} onMoved={handleMoved}>
      {filteredMovies.map((movie) => (
        <SplideSlide key={movie.id}>
          <img width="294" height="412" src={movie.image} alt={movie.title} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
