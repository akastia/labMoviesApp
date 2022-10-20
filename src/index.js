import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import favouriteMoviesPage from "./pages/favouriteMoviesPage";
import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MovieUpcomingPage from "./pages/movieUpcomingPage";

const App = () => {
  return (
      <BrowserRouter>
          <SiteHeader />
          <Routes>
          <Route path="/movies/upcoming" element={<MovieUpcomingPage/>} />            
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/favourites" element={<favouriteMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            
          </Routes>
        </BrowserRouter>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );