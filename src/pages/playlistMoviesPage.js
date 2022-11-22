import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getUpcomingMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromPlaylist from "../components/cardIcons/removeFromPlaylist";


const PlaylistMoviesPage = () => {
  const {playlist:  upcomingId} = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const playlistMovieQueries = useQueries(
    upcomingId.map((upcomingId) => {
      return {
        queryKey: ["upcoming", { id: upcomingId }],
        queryFn: getUpcomingMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = playlistMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const upcoming = playlistMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Playlist Movies"
      movies={upcoming}
      action={(upcoming) => {
        return (
          <>
            <RemoveFromPlaylist movie={upcoming} />
            
          </>
        );
      }}
    />
  );
};

export default PlaylistMoviesPage;