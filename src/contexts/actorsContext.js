import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  // const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState( [] )
  // const [playlists, setPlaylist] = useState( [] )

  const addToFavourites = (actor) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavourites(newFavourites);
  };

  // // We will use this function in a later section
  // const removeFromFavourites = (movie) => {
  //   setFavourites( favourites.filter(
  //     (mId) => mId !== movie.id
  //   ) )
  // };

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
        favourites,
        addToFavourites,
        // removeFromFavourites,
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