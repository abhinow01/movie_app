import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CustomTextField from "./customTextField";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MovieBanner from './movieBanner';
import FeaturedMovies from './featuredMovies';
import { Link } from 'react-router-dom';


function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }

  return (
    <div>
      <MovieBanner handleDrawerOpen={handleDrawerOpen} />
      <AppBar position="static" style={{
        background: "transparent",
        boxShadow: "none",
      }}
        elevation={0}
      >
        
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        {/* Drawer content goes here */}
        <div style={{ width: '250px' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/movies/:id">
              <ListItemButton>
                <ListItemText primary="Movies" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="TV series" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="watch later" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <FeaturedMovies/>
    </div>
  );
}

export default Home;
