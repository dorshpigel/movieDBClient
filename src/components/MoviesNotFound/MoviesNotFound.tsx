import {Icon} from "@rsuite/icons"
import {MdSearchOff} from "react-icons/md";
import "./MoviesNotFound.css";


const MoviesNotFound = () => {
  return (
    <>
      <h2 className="no-movies-found">No movies were found...</h2>
      <br/>
      <Icon className="glass-icon" as={MdSearchOff}/>
    </>
  );
};

export default MoviesNotFound;
