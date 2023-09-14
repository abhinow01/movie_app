import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const baseUrl = 'https://api.themoviedb.org/3/movie/'

  useEffect(() => {
    axios.get(`${baseUrl}${id}`, {
      params: {
        api_key: import.meta.env.VITE_APP_API_KEY, // Replace with your TMDb API key
        language: 'en-US'
      }
    })
    .then(response => {
      setMovieDetails(response.data);
    })
    .catch(error => {
      console.error('Error fetching movie details:', error);
    });
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>; // Render nothing if data is not yet fetched
  }

  return (
    <div>
      <h1 data-testid="movie-title">{movieDetails.title}</h1>
      <p data-testid="movie-release-date">Release Date: {movieDetails.release_date}</p>
      <p data-testid="movie-runtime">Runtime: {movieDetails.runtime} minutes</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
