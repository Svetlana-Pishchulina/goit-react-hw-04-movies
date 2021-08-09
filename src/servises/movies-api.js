import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "d7174b43fbae0b7d3293731e243c57d8";

const fatchTrending = () => {
  return axios
    .get(`/trending/all/day?api_key=${API_KEY}`)
    .then((response) => response.data.results);
};

const fatchMovieDetails = (movie_id) => {
  return axios
    .get(`/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
};

const fatchMovieCredits = (movie_id) => {
  return axios
    .get(`/movie/${movie_id}/credits?api_key=${API_KEY}`)
    .then((response) => response.data.cast);
};

const fatchMovieReviews = (movie_id) => {
  return axios
    .get(`/movie/${movie_id}/reviews?api_key=${API_KEY}`)
    .then((response) => response.data.results);
};

const fetchMovieByName = (query) => {
  return axios
    .get(
      `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
    )
    .then((response) => response.data.results);
};

const imagePath = "https://image.tmdb.org/t/p/w500/";
export default {
  fatchTrending,
  fatchMovieDetails,
  imagePath,
  fatchMovieCredits,
  fatchMovieReviews,
  fetchMovieByName,
};
