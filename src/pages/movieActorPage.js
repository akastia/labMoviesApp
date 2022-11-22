import React from "react";
import { getMovieActorImages } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getMovieActorImages)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = actors.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (actorId) => true 

  return (
    <PageTemplate
      title="Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
);
};
export default HomePage;