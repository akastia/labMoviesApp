import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovie } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const MovieUpcomingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getUpcomingMovie)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // // Redundant, but necessary to avoid app crashing.
  // const favourites = movies.filter(m => m.favourite)
  // localStorage.setItem('favourites', JSON.stringify(favourites))
  // const addToFavourites = (movieId) => true 


  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};

export default MovieUpcomingPage;