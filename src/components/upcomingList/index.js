import React from "react";
import Movie from "../playlistCard";
import Grid from "@mui/material/Grid";

const PlaylistList = ( {movies, action }) => {
  let playlistCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return playlistCards;
};

export default PlaylistList;