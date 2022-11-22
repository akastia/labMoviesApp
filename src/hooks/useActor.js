import { useEffect, useState } from "react";
import {getMovieActors} from '../api/tmdb-api'

const useActor = id => {
  const [actor, setActor] = useState(null);
  useEffect(() => {
    getMovieActors(id).then(actor => {
      setActor(actor);
    });
  }, [id]);
  return [actor, setActor];
};

export default useActor