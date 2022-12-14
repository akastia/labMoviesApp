import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTopMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const TopRatedMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getTopMovies)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
 


  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movies) => {
        return <AddToFavouritesIcon movie={movies} />
      }}
    />
  );
};

export default TopRatedMoviePage;