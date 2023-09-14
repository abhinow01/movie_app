import React from "react";
import { Card, CardContent, Typography } from '@mui/material';
function SearchResults({results}){
 return (
<div style={{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around'
}} >

    {
        results.map((movie)=>(
            <Card key = {movie.id} style={{ margin: '10px', maxWidth: '200px' }}>
                <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
            <Typography variant="subtitle1">Release Date: {movie.release_date}</Typography>
            <Typography variant="subtitle1">IMDb Rating: {movie.vote_average}</Typography>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ maxWidth: '100%', height: 'auto' }} />
          </CardContent>
            </Card> 
        ))
    }


</div>
 )
}

export default SearchResults;