// import React, { Component } from 'react';
import React, {Component} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export class NavBar extends Component {
  render() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                NewsPanda
              </Typography>
              <Typography variant="a" color="inherit" component="div">
                Home
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
  }
}

export default NavBar