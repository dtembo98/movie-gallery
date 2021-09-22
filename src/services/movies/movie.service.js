import camelize from "camelize";
import axios from "axios";
import { config } from "../config";

class MovieService {
  _getMovieGenres = async () => {
    try {
      let API_URL = `${config.BASE_URL}/genre/movie/list?api_key=${config.API_KEY}&language=en-US&page=1`;
      const results = await axios.get(API_URL);

      return results.data.genres;
    } catch (error) {
      console.log(error.response);
      return error;
    }
  };

  _moviesTransform = (results) => {
    return camelize(results);
  };

  geMovieDetails = async (movieId) => {
    try {
      let API_URL = `${config.BASE_URL}/movie/${movieId}?api_key=${config.API_KEY}&language=en-US`;
      const results = await axios.get(API_URL);

      return this._moviesTransform(results.data);
    } catch (error) {
      console.log(error);
    }
  };
  geMovieCredits = async (movieId) => {
    try {
      let API_URL = `${config.BASE_URL}/movie/${movieId}/credits?api_key=${config.API_KEY}&language=en-US`;
      const results = await axios.get(API_URL);

      return this._moviesTransform(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  _moviesByGenre = async (id, name) => {
    let API_URL = `${config.BASE_URL}/discover/movie?api_key=${config.API_KEY}&with_genres=${id}&language=en-US&page=1`;
    try {
      const results = await axios.get(API_URL);
      return {
        genre: name,
        data: results.data.results,
      };
    } catch (error) {
      console.log(error);
    }
  };

  getMoviesByGenre = async (page = 1) => {
    const genres = await this._getMovieGenres();
    const promises = genres.map(({ id, name }) => {
      return this._moviesByGenre(id, name)
        .then((data) => {
          return this._moviesTransform(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    const movies = await Promise.all(promises);
    return movies;
  };
}

export default new MovieService();
