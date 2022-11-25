import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  // const [myReviews, setMyReviews] = useState( {} ) 
  const [favouritesActors, setFavouritesActors] = useState( [] )
  // const [playlists, setPlaylist] = useState( [] )

  const addToFavouritesActors = (actor) => {
    let newFavourites = [...favouritesActors];
    if (!favouritesActors.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavouritesActors(newFavourites);
  };

  const removeFromFavourites = (actor) => {
    setFavouritesActors( favouritesActors.filter(
      (aId) => aId !== actor.id
    ) )
  };

  // const addReview = (movie, review) => {
  //   setMyReviews( {...myReviews, [movie.id]: review } )
  // };

  // const addToPlaylists = (movie) => {
  //   let newPlaylist = [...playlists];
  //   if (!playlists.includes(movie.id)) {
  //     newPlaylist.push(movie.id);
  //   }
  //   setPlaylist(newPlaylist);
  //   console.log(newPlaylist);
  // };

  return (
    <ActorsContext.Provider
      value={{
        favouritesActors,
        addToFavouritesActors,
        removeFromFavourites,
        // addReview,
        // playlists,
        // addToPlaylists,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;