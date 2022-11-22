import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovieActorImages, getMovieActors } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const MovieActorPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('actors', getMovieActors, getMovieActorImages)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  const favourites = actors.filter(m => m.favourites)
  localStorage.setItem('playlist', JSON.stringify(favourites))
  const addToFavourite = (actorsId) => true 

  

  return (
    <PageTemplate
      title="Actors"
      actors={actors}
      action={(actors) => {
        return <AddToFavouritesIcon actors={actors} />
      }}
    />
  );
};

export default MovieActorPage;