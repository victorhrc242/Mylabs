// src/components/MovieList.jsx
import React, { useState } from "react";
import MovieItem from "./MovieItem";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="movie-container">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} onClick={setSelectedMovie} />
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-details">
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            className="movie-details-image"
          />
          <div className="movie-details-info">
            <h2>{selectedMovie.title}</h2>
            <p><strong>Lançamento:</strong> {selectedMovie.release_date}</p>
            <p><strong>Sinopse:</strong> {selectedMovie.overview}</p>
            <button onClick={() => setSelectedMovie(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
