import React, { useState } from "react";
export const TvShowContext = React.createContext(null);

const TvShowContextProvider = (props) => {
//   const [myReviews, setMyReviews] = useState( {} ) 
  const [favouritesTv, setFavouritesTv] = useState( [] )
//   const [playlists, setPlaylist] = useState( [] )

  const addToTvFavourites = (tv) => {
    let newFavourites = [...favouritesTv];
    if (!favouritesTv.includes(tv.id)) {
      newFavourites.push(tv.id);
    }
    setFavouritesTv(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavouritesTv( favouritesTv.filter(
      (mId) => mId !== tv.id
    ) )
  };

//   const addReview = (movie, review) => {
//     setMyReviews( {...myReviews, [movie.id]: review } )
//   };

//   const addToPlaylists = (movie) => {
//     let newPlaylist = [...playlists];
//     if (!playlists.includes(movie.id)) {
//       newPlaylist.push(movie.id);
//     }
//     setPlaylist(newPlaylist);
//     console.log(newPlaylist);
//   };

  return (
    <TvShowContext.Provider
      value={{
        favouritesTv,
        addToTvFavourites,
        removeFromFavourites,
        // addReview,
        // playlists,
        // addToPlaylists,
      }}
    >
      {props.children}
    </TvShowContext.Provider>
  );
};

export default TvShowContextProvider;