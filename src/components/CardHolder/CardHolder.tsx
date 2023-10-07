import { useState, useEffect } from "react";
import Card from "../Card/Card";
import MoviesNotFound from "../MoviesNotFound/MoviesNotFound";
import movieService from "../../services/movie.service";
import favoriteService from "../../services/favorite.service";
import { Movie, ApiRes } from "./MovieList.interface";
import { Pagination } from "rsuite";
import "../CardHolder/CardHolder.css";

interface CardHoldParams {
  setOpenModalId: any;
  type: string;
}

const CardHolder = ({ setOpenModalId, type }: CardHoldParams) => {
  const data: Movie[] = [];
  const [limit] = useState(20);
  const [page, setPage] = useState(1);
  const [movieRows, setMovieRows] = useState(data);
  const [totalResults, setTotalResults] = useState(0);

  const changePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    const change = async () => {
      switch (type) {
        case "favorite": {
          const favs = await favoriteService.getFavourites();
          if (favs === null) {
            console.log("There was an issue fetching the favorites list");
            return;
          }
          setMovieRows(favs);
          setTotalResults(favs.length);
          break;
        }
        default: {
          const data: ApiRes = await movieService.getMovieList(type, page);
          const totalResults = data.total_results;
          const res = data.results as Movie[];
          if (data) {
            setMovieRows([]);
            setMovieRows(res);
            setTotalResults(totalResults);
          } else {
            console.log("there was an issue fetching the data");
            setMovieRows([]);
          }
          break;
        }
      }
    };
    change();
  }, [page, type]);

  useEffect(() => {
    setPage(1);
  }, [type]);

  return (
    <div className="general-holder-div">
      <div className="card-holder-div">
        {movieRows && movieRows.length > 0 ? (
          movieRows.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id.toString()}
              header={movie.title}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              content={movie.vote_average}
              setOpenModalId={setOpenModalId}
            />
          ))
        ) : (
          <MoviesNotFound />
        )}
      </div>

      <div className="pagination-container" style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["total", "|", "pager"]}
          total={totalResults > 10000 ? 10000 : totalResults} //their API does not support over page 500
          limit={limit}
          activePage={page}
          onChangePage={(page) => {
            changePage(page);
          }}
        />
      </div>
    </div>
  );
};

export default CardHolder;
