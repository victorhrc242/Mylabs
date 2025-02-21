// src/components/MovieItem.jsx
import React, { useState } from "react";
import "./MovieItem.css";

const MovieItem = ({ movie, onClick }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=Imagem+não+disponível";

  return (
    <div className="movie-item" onClick={() => onClick(movie)}>
      <img src={imageUrl} alt={movie.title} className="movie-thumbnail" />
    </div>
  );
};

export default MovieItem;
