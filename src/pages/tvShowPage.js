import React from "react";
import { getTvShows } from "../api/tmdb-api";
import TvsListPageTemplate from '../components/templateTvShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addActorFavourites';

const TvPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // // Redundant, but necessary to avoid app crashing.
  const favourites = tvs.filter(a => a.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (tvIds) => true 

  return (
    <TvsListPageTemplate
      title="Tv Shows"
      tvs={tvs}
      action={(tv) => {
        return <AddToFavouritesIcon tv={tv} />
      }}
    />
);
};
export default TvPage;