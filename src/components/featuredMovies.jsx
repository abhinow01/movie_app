import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

function FeaturedMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch top-rated movies
    axios.get('https://api.themoviedb.org/3/movie/top_rated', {
      params: {
        api_key: import.meta.env.VITE_APP_API_KEY,
        language: 'en-US',
        page: 1
      }
    })
    .then(response => {
      setMovies(response.data.results);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom style={{
        padding:20
      }}>
        Featured Movies
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {movies.map(movie => (
          <Card key={movie.id} style={{ maxWidth: '200px',
          padding:20 }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%',
            margin: 20 }}
            />
            <CardContent>
              <Typography variant="subtitle1">{movie.title}</Typography>
              <Typography variant="body2">
                Release Date: {movie.release_date}
              </Typography>
              <Typography variant="body2">IMDb Rating: {movie.vote_average}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FeaturedMovies;
