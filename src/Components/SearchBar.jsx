// src/components/SearchBar.jsx
import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "f5539f531012ef0e915aa5a32610235f"; // Coloque sua chave da API aqui

  useEffect(() => {
    if (query.length > 2) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data.results.slice(0, 5)); // Pega apenas as 5 primeiras sugestões
        })
        .catch((err) => console.error("Erro ao buscar sugestões:", err));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (title) => {
    setQuery(title);
    setSuggestions([]);
    onSearch(title);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar filmes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>🔍</button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((movie) => (
            <li
              key={movie.id}
              onClick={() => handleSelectSuggestion(movie.title)}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
