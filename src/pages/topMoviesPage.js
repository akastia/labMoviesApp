import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovie } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const MovieUpcomingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovie)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 


  return (
    <PageTemplate
      title="Top Movies"
      movies={movies}
      action={(movies) => {
        return <AddToFavouritesIcon movie={movies} />
      }}
    />
  );
};

export default MovieUpcomingPage;