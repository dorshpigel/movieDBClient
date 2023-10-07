import { SpecificMovie } from "../components/MovieModal/Movie.interface";

class FavoriteService {
  constructor() {}

  addToFavorites(movie: SpecificMovie) {
    const localData = localStorage.getItem("favorites");
    let favorites = JSON.parse(localData ? localData : "[]");

    const existingIndex = favorites.findIndex(
      (favMovie: SpecificMovie) => favMovie.id === movie.id
    );

    if (existingIndex !== -1) {
      favorites[existingIndex] = movie;
    } else {
      favorites.push(movie);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  clearFavorites() {
    localStorage.setItem("favorites", JSON.stringify([]));
  }

  getFavourites() {
    const favs = localStorage.getItem("favorites");
    return JSON.parse(favs ? favs : '[]')
  }
}

export default new FavoriteService();
