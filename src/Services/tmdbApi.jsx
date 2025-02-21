// src/services/tmdbApi.js

const API_KEY = 'f5539f531012ef0e915aa5a32610235f'; // Substitua pela sua chave da TMDb
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = {
  searchMovies: async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return [];
    }
  },
};

export default tmdbApi;
