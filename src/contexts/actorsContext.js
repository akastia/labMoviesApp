import React, { Fragment, useState } from "react";

export const ActorsContext = React.createContext({
  favourites: [],
  addFav: (actor) => {},
  removeFav: (actor) => {},
});

const ActorsContextProvider = (props) => {
  
  const [favourites, setFavourites] = useState( [] )
  

  const addToFavourites = (actor) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (actor) => {
    setFavourites( favourites.filter(
      (mId) => mId !== actor.id
    ) )
  };

  const favouritesValue = {
    favourites: favourites,
    addFav: addToFavourites,
    removeFav: removeFromFavourites,
  };

  return (
    <ActorsContext.Provider value={favouritesValue}
    >
      <Fragment>{props.children}</Fragment>
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;