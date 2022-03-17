import * as React from 'react';
import {
  Link,
  Link as RouterLink,
  MemoryRouter,
  withRouter,
} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';

const pages = [
  { name: 'Connection Screen', to: '/' },
  { name: 'Connection List', to: '/connection-list' },
  { name: 'Connecton Map', to: '/connection-map' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(pages);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ backgroundColor: '#000', color: '#fff' }} position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 12, display: { xs: 'none', md: 'flex' } }}
          >
            Qore Connect
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                Connection Screen
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>Connection List</MenuItem>
              <MenuItem onClick={handleCloseUserMenu}> Main Screen </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}> Mapping </MenuItem>

              {/* {anchorEl.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center' sx={{ color: '#000' }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          <Typography
            variant='h5'
            fontWeight='fontWeightBold'
            noWrap
            component='div'
            textAlign='center'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Qore Connect
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to='/'>
              {' '}
              <MenuItem sx={{ color: 'white', textDecoration: 'none' }}>
                {' '}
                Connection Screen{' '}
              </MenuItem>
            </Link>
            <Link to='/mapping'>
              {' '}
              <MenuItem sx={{ color: 'white', textDecoration: 'none' }}>
                {' '}
                Mapping Screen
              </MenuItem>
            </Link>
            <Link to='/gorila'>
              {' '}
              <MenuItem sx={{ color: 'white', textDecoration: 'none' }}>
                {' '}
                Gorila Screen
              </MenuItem>
            </Link>

            {/* {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#fff', display: 'block', align: 'center' }}
              >
                {page.name}
              </Button>
            ))} */}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}> Profile </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}> Account </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}> User </MenuItem>

              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
