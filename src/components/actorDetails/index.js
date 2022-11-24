import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import { CardContent } from "@mui/material";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const info = {
  display: "flex",
  justifyContent: "left",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => { 
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        {actor.name}
      </Typography>

      <Typography variant="h6" component="p">
        Biography
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Biography" sx={chip} color="primary" />
        </li>
        <li>{actor.biography} </li>
      </Paper>
      <Typography variant="h6" component="p">
        Personal Info
      </Typography>

      <Paper
        component="ul"
        sx={info}
      >
        <Typography>
          <p>Known for<br></br>{actor.known_for_department} </p>
          <p>Birthday<br></br>{actor.birthday}</p>
          <p>Gender<br></br>{actor.gender}</p>
          <p>Place of Birth<br></br>{actor.place_of_birth}</p>
          <p>Also Known As<br></br>{actor.also_known_as}</p>
          <p>Popularity<br></br>{actor.popularity}</p>
        </Typography>
        
      </Paper>
      
      {/* <Paper 
        component="ul" 
        sx={info}
      >
        <Typography variant="h6" component="p">
        Personal Info
        </Typography>
        
      </Paper>


      <Typography variant="h10" component="p">
        Known For
        {actor.known_for_department}
        
        </Typography>
         */}
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      </Drawer>
    </>
  );
};

export default  ActorDetails ;