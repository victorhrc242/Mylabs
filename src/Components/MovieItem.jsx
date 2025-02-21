// src/components/MovieItem.jsx

import React from 'react';

const MovieItem = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Imagem+não+disponível'; // Imagem padrão caso não exista

  return (
    <div className="movie-item">
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieItem;
