import React from "react";
import { getTopTvShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvShowList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


const TopTvPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tvshows', getTopTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // // Redundant, but necessary to avoid app crashing.
  // const favourites = actors.filter(a => a.favourite)
  // localStorage.setItem('favourites', JSON.stringify(favourites))
  // const addToFavourites = (actorId) => true 

  return (
    <PageTemplate
      title="Top TV Shows"
      tvs={tvs}
      action={(tvs) => {
      }}
      
    />
);
};
export default TopTvPage;