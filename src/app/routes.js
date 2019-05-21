import React from 'react';
// Icons
import GurbaniIcon from '@material-ui/icons/WbSunnyOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import AboutIcon from '@material-ui/icons/Info';
// Components
import Home from '../components/Home/Home';
import Settings from '../components/Settings/Settings';
import About from '../components/About/About';
import Changelog from '../components/About/Changelog';
// Testing
import PauriOrderTest from '../components/Testing/PauriOrder/PauriOrder';
import LineOrderTest from '../components/Testing/LineOrder/LineOrder';
import MatraTest from '../components/Testing/Matra/Matra';
// Training
import PauriOrderTrain from '../components/Training/PauriOrder/PauriOrder';
import LineOrderTrain from '../components/Training/LineOrder/LineOrder';
import MatraTrain from '../components/Training/Matra/Matra';

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
      exact: true,
    },
  },
  {
    id: 'changelog',
    path: '/about/changelog',
    route: {
      component: Changelog,
    },
  },
  // TESTING ROUTES
  {
    id: 'pauri-order-test',
    path: '/testing/pauri-order/:bani',
    route: {
      component: PauriOrderTest,
    },
  },
  {
    id: 'line-order-test',
    path: '/testing/line-order/:bani',
    route: {
      component: LineOrderTest,
    },
  },
  {
    id: 'matra-test',
    path: '/testing/matra/:bani',
    route: {
      component: MatraTest,
    },
  },
  // TRAINING ROUTES
  {
    id: 'pauri-order-train',
    path: '/training/pauri-order/:bani',
    route: {
      component: PauriOrderTrain,
    },
  },
  {
    id: 'line-order-train',
    path: '/training/line-order/:bani',
    route: {
      component: LineOrderTrain,
    },
  },
  {
    id: 'matra-train',
    path: '/training/matra/:bani',
    route: {
      component: MatraTrain,
    },
  },
];

export default routes;
