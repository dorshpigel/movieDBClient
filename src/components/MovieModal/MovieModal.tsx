import { useEffect, useState } from "react";
import { Modal, Button, Divider } from "rsuite";
import favoriteService from "../../services/favorite.service";
import { SpecificMovie } from "./Movie.interface";
import "../MovieModal/MovieModal.css";

interface MovieModalParams {
  open: boolean;
  setOpen: any;
  movie: SpecificMovie | {};
  type: string;
}

let formatter = Intl.NumberFormat("en", { notation: "compact" });

const MovieModal = ({ open, setOpen, movie, type }: MovieModalParams) => {
  const [added, setAdded] = useState(false);

  const handleChange = () => {
    setAdded(false);
    setOpen(!open);
  };

  const addToFavorites = (movie: SpecificMovie) => {
    favoriteService.addToFavorites(movie);
    setAdded(true);
  };

  useEffect(() => {
    setAdded(type === "favorite");
  }, [open]);

  return (
    <div>
      <Modal open={open} onClose={handleChange} className="custom-modal">
        <Modal.Header>
          <Modal.Title>Movie Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <div className="image-container">
              <img
                className="poster-modal"
                src={`https://image.tmdb.org/t/p/w500/${
                  (movie as SpecificMovie).poster_path
                }`}
              ></img>
            </div>
            <div className="modal-content">
              <h4>{(movie as SpecificMovie).title}</h4>
              <p>
                <strong>Budget: </strong>
                {formatter.format((movie as SpecificMovie).budget)}
              </p>
              <p>
                <strong>Vote Average: </strong>
                {(movie as SpecificMovie).vote_average}
              </p>
              <p>
                <strong>Vote Count: </strong>
                {(movie as SpecificMovie).vote_count}
              </p>
              <p>
                <strong>Runtime: </strong>
                {`${(movie as SpecificMovie).runtime} Minutes`}
              </p>
              <p>
                <strong>Release Date: </strong>
                {new Date((movie as SpecificMovie).release_date).toDateString()}
              </p>
              {added && (
                <p>
                  <strong>Added to favorites</strong>
                </p>
              )}
              <Divider />
              <p>{(movie as SpecificMovie).overview}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {!added && (
            <Button
              onClick={() => {
                addToFavorites(movie as SpecificMovie);
              }}
              appearance="primary"
            >
              Add to Favorites
            </Button>
          )}
          <Button onClick={handleChange} appearance="subtle">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieModal;
