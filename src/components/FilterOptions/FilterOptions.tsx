import { RadioTile, RadioTileGroup } from "rsuite";
import { Icon } from "@rsuite/icons";
import { VscRuby, VscRunAll,VscStarHalf } from "react-icons/vsc";
import "../FilterOptions/FilterOptions.css";

interface filterOptionsParams {
  setType: any;
  type: string | "now_playing" | "popular" | "favorite";
}

const FilterOptions = ({ setType, type }: filterOptionsParams) => {
  
  const onTileChange = (currType: string) => {
    setType(currType);
  };

  return (
    <div className="tile-holder">
      <RadioTileGroup
        value={type}
        inline
        aria-label="Create new project"
      >
        <RadioTile
          icon={<Icon as={VscStarHalf} />}
          label="Popular"
          value="popular"
          className="custom-tile"
          onClick={() => onTileChange("popular")}
        >
          View a list of popular movies from all platforms.
        </RadioTile>
        <RadioTile
          icon={<Icon as={VscRunAll} />}
          label="Now Playing"
          value="now_playing"
          className="custom-tile"
          onClick={() => onTileChange("now_playing")}
        >
          View a list of movies that are playing now in theaters.
        </RadioTile>
        <RadioTile
          icon={<Icon as={VscRuby} />}
          label="Favourites"
          value="favorite"
          className="custom-tile"
          onClick={() => onTileChange("favorite")}
        >
          View a list of movies that were added to your favorites.
        </RadioTile>
      </RadioTileGroup>
    </div>
  );
};

export default FilterOptions;
