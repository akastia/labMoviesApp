import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavourites = (actor) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavourites(newFavourites);
    console.log(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (actor) => {
    setFavourites( favourites.filter(
      (tId) => tId !== actor.id
    ) )
  };

  const addReview = (actor, review) => {
    setMyReviews( {...myReviews, [actor.id]: review } )
  };



  return (
    <ActorsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;