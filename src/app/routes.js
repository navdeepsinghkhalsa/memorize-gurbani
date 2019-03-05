import React from 'react';
// Icons
import GurbaniIcon from '@material-ui/icons/WbSunnyOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import AboutIcon from '@material-ui/icons/Info';
// Components
import Home from '../components/Home/Home';
import Settings from '../components/Settings/Settings';
import About from '../components/About/About';
// Training
import PauriOrder from '../components/Training/PauriOrder/PauriOrder';
import LineOrder from '../components/Training/LineOrder/LineOrder';

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
  {
    id: 'pauri-order',
    path: '/pauri-order/:bani',
    route: {
      component: PauriOrder,
    },
  },
  {
    id: 'line-order',
    path: '/line-order/:bani',
    route: {
      component: LineOrder,
    },
  },
];

export default routes;
