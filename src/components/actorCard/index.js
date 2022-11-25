import React, { useContext  }from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
// import StarRateIcon from "@mui/icons-material/StarRate";
// import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import ActorsContext  from "../../contexts/actorsContext";


export default function ActorCard({ actor, action }) {
  // const actors = props.actors;
  const { favouritesActors, addToFavouritesActors} = useContext(ActorsContext);

  if (favouritesActors.find((id) => id === actor.id)) {
    actor.favouritesActors = true;
  } else {
    actor.favouritesActors = false
  }

  const handleAddToFavourite = (e) => {
    e.preventDefault();
    addToFavouritesActors(actor);
  };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
          <CardHeader
        avatar={
          actor.favouritesActors ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "} 
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Link to={`/actors/${actor.id}`}>
        <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        
      </CardContent>
    </Card>
  );
}