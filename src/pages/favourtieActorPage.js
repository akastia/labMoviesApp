import React, { useContext } from "react";
import PageTemplate from "../components/templateActorList";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromActorFavourites from "../components/cardIcons/removeActorFromFavourite";
// import WriteReview from "../components/cardIcons/writeReview";


const FavouriteActorsPage = () => {
  const {favourites: actorIds } = useContext(ActorsContext);

  // Create an array of queries and run in parallel.
  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", { id: actorId }],
        queryFn: getActor,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favouriteActorQueries.map((q) => {
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite Actors"
      actors={actors}
      action={(actor) => {
        return (
          <>
            <RemoveFromActorFavourites actor={actor} />
          </>
        );
      }}
    />
  );
};

export default FavouriteActorsPage;