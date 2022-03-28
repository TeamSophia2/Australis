import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Toolbar
} from '@material-ui/core';
import Logo from '../mainLayout/Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
        
        <Box sx={{ flexGrow: 1 }} />
        <RouterLink to="/">
        <Button variant="contained" color="primary"> Democracy Indicators </Button>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <RouterLink to="/app/dashboard2">
        <Button variant="contained" color="primary"> Cultural bias </Button>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <RouterLink to="/app/dashboard3">
        <Button variant="contained" color="primary"> Temporal evolution </Button>
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <RouterLink to="/">
          <Logo />
        </RouterLink>

      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
