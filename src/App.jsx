import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
function App() {
  
  return (
    <>

    <Router>
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" component={<MovieDetails/>} />
      </Routes>
      
    </Router>

          </>
  )
}

export default App
