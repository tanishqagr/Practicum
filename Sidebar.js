import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import './Sidebar.css';

const SideBar = () => {
  const menuItems = ['Contract Summary', 'Vendor Directory', 'Forecast Reporting', 'Procurement Trainings'];
  return (
    <List>
      {menuItems.map(item => (
        <ListItem button key={item}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}

export default SideBar;
