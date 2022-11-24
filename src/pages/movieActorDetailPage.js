import React from "react";
import { useParams } from 'react-router-dom';
import ActorsDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorPage";
import { getActorsImages } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorDetailsPage = (props) => {
  const { id } = useParams();

  const { data: actors, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActorsImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {actors ? (
        <>
          <PageTemplate actors={actors}>
            <ActorsDetails actors={actors} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;