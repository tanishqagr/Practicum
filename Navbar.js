import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Navbar.css';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Portland.gov
        </Typography>
        <Typography variant="h6">Procurement Management</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
