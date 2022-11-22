import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieUpcomingPage from "./pages/movieUpcomingPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
// import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import ActorsPage from "./pages/movieActorPage";
import ActorDetailsPage from "./pages/movieActorDetailPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
          <Routes>
            
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route path="/movies/upcoming" element={<MovieUpcomingPage/>} />            
            <Route path="/movies/playlist" element={ <PlaylistMoviesPage /> } />
            <Route path="/actors" element={ <ActorsPage /> } />
            <Route path="/actors/:id" element={ <ActorDetailsPage /> } />
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            
            
          </Routes>
          </MoviesContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );