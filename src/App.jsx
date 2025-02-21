// src/App.jsx

import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';
import tmdbApi from './services/tmdbApi';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await tmdbApi.searchMovies(query);
    setMovies(results);
  };
  return (
    <div className="App">
      <h1>Busca de Filmes</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
