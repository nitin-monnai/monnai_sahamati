import { default as placeholder } from "../assets/placeholder.svg";
import Tile from "./Tile";

const PlaceHolderTile = () => {
  return (
    <Tile
      img_src={placeholder}
      checked_state={false}
      alt="Placeholder"
      tileName="Placeholder"
      callback_func={() => {}}
    />
  );
};

export default PlaceHolderTile;
