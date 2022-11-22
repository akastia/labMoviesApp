import React from "react";
import Actor from "../movieActor";
import Grid from "@mui/material/Grid";

const ActorList = ( {actors, action }) => {
  let movieActor = actors.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={m.id} actors={m} action={action} />
    </Grid>
  ));
  return movieActor;
};

export default ActorList;