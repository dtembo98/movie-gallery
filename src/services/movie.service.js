import camelize from "camelize";
import axios from "axios";
import { config } from "./config";

export const moviesRequest = async () => {
  let API_URL = `${config.BASE_URL}3/movie/popular?api_key=${config.API_KEY}&language=en-US&page=1`;
  const movies = await axios.get(API_URL);

  return movies;
};

export const getMovieGenre = async (id) => {
  let API_URL = `${config.BASE_URL}3/movie/popular?api_key=${config.API_KEY}&language=en-US&page=1`;
  const movies = await axios.get(API_URL);

  return movies;
};

export const moviesTransform = (results) => {
  return camelize(results);
};
4;
