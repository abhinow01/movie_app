import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Toolbar, IconButton } from '@mui/material';
import CustomTextField from "./customTextField";
import MenuIcon from '@mui/icons-material/Menu';
import SearchResults from './SearchResults';

function MovieBanner({ handleDrawerOpen }) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming', {
      params: {
        api_key: import.meta.env.VITE_APP_API_KEY, // Replace with your TMDb API key
        language: 'en-US',
        page: 1
      }
    })
      .then(response => {
        setMovieDetails(response.data.results[Math.floor(Math.random()*20)]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

//   if (!movieDetails) {
//     return null; // Render nothing if data is not yet fetched
//   }

  const handleSearch = (searchTerm) => {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: import.meta.env.VITE_APP_API_KEY,
        language: 'en-US',
        query: searchTerm
      }
    })
    .then(response => {
      const results = response.data.results;
      setSearchResults(results);
      console.log({"set search results state ": setSearchResults}); // Set search results in state
    })
    .catch(error => {
      console.error('Error fetching search results:', error);
    });
  };

  if (!movieDetails || !movieDetails.backdrop_path) {
    return null; // Render nothing if data is not yet fetched or backdrop_path is not available
  }

  return (
    <Card
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px',
        color: 'white',
        position: 'relative',
        overflow:"hidden"
      }}
    >

<div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))', // Create fading effect
        }}
      ></div>

      <CardContent style={{position:'relative'}}>
        <div style = {{
            display:'flex',
            flexWrap: 'wrap'
        }}>
        <Toolbar>
          <IconButton edge="start" style={{ background: '#FF4081' }} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <CustomTextField
          variant="outlined"
          placeholder="Search..."
          fullWidth
          className="custom-text-field"
          style={{
            marginTop: '10px',
             marginBottom: '16px',
          }}


          onSearch={handleSearch}
        />
        </div>
        
        {searchResults && <SearchResults results={searchResults} />}
        {movieDetails && (
            <div>
        <Typography variant="h4" component="div">
          {movieDetails.title}
        </Typography>
        <br/><br/>
        <Typography variant="h6" >
          {movieDetails.overview}
        </Typography>
        </div>
  )}
      </CardContent>
    </Card>
  );
}

export default MovieBanner;
