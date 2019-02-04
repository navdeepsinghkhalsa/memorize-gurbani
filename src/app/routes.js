import React from 'react';
// Icons
import GurbaniIcon from '@material-ui/icons/WbSunnyOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import AboutIcon from '@material-ui/icons/Info';
// Components
import Home from '../routes/Home/Home';
import Settings from '../routes/Settings/Settings';
import About from '../routes/About/About';

const routes = [
  {
    id: 'home',
    path: '/',
    nav: {
      icon: <GurbaniIcon />,
      label: 'Gurbani',
    },
    route: {
      component: Home,
      exact: true,
    },
  },
  {
    id: 'settings',
    path: '/settings',
    nav: {
      icon: <SettingsIcon />,
      label: 'Settings',
    },
    route: {
      component: Settings,
    },
  },
  {
    id: 'about',
    path: '/about',
    nav: {
      icon: <AboutIcon />,
      label: 'About',
    },
    route: {
      component: About,
    },
  },
];

export default routes;
