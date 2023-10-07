import axios, { AxiosResponse } from "axios";

const baseUrl = "https://api.themoviedb.org/3/movie";

class MovieService {
  constructor() {}

  async getSpecificMovie<T>(id: string): Promise<T> {
    try {
      const url = `${baseUrl}/${id}?api_key=${process.env.REACT_APP_MOVIE_DB_TOKEN}`;
      const res: AxiosResponse<T> = await axios.get(url);
      return res.data;
    } catch (e) {
      throw e;
    }
  }

  async getMovieList<T>(
    url: string | "popular" | "now_playing" | "favorite",
    page: number
  ) {
    try {
      const queryParams = {
        page: (page ? page : "1") as string,
        api_key: process.env.REACT_APP_MOVIE_DB_TOKEN as string,
        language: "en-US",
      };
      
      const params = new URLSearchParams(queryParams);
      const res: AxiosResponse<T> = await axios.get(
        `${baseUrl}/${url}?${params.toString()}`
      );
      return res.data;
    } catch (e) {
      throw e;
    }
  }
}

export default new MovieService();
