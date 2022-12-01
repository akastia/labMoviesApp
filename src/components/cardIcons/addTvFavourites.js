import React, { useContext } from "react";
import { TvShowContext } from "../../contexts/tvShowsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddTvFavouritesIcon = ({ tv }) => {
  const context = useContext(TvShowContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToTvFavourites(tv);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddTvFavouritesIcon;