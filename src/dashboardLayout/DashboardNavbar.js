import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Hidden,
  Tab,
  Tabs,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from '../mainLayout/Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        
        <RouterLink to="/">
        <Button variant="contained" color="primary"> Democracy Indicators | World Map</Button>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <RouterLink to="/app/dashboard2">
        <Button variant="contained" color="primary">Cultural bias</Button>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <RouterLink to="/app/dashboard3">
        <Button variant="contained" color="primary">Visibility in the media</Button>
        </RouterLink>
    
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <InputIcon />
        </IconButton>
        <Button variant="contained" color="primary">Contained</Button>
        <IconButton
          color="inherit"
          onClick={onMobileNavOpen}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
