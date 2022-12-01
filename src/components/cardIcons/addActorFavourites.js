import React, { useContext } from "react";
import { ActorsContext } from "../../contexts/actorsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";


const ActorFavouritesIcon = ({ actor }) => {
  const context = useContext(ActorsContext);

  const handleAddToFavouritesActor = (e) => {
    e.preventDefault();
    context.addToFavouritesActor(actor);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavouritesActor}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default ActorFavouritesIcon;