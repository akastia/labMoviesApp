import React from "react";
import { getActors } from "../api/tmdb-api";
import ActorListPageTemplate from '../components/templateActorList';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  return (
    <ActorListPageTemplate
      title="Actors"
      actors={actors}
      action={(actor) => {
        
      }}
    />
);
};
export default ActorsPage;