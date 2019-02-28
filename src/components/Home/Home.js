import React from 'react';
// Components
import TitleBar from '../TitleBar';
import BaniList from './BaniList/BaniList';

const Home = () => (
  <React.Fragment>
    <TitleBar text="Memorize Gurbani" />
    <BaniList />
  </React.Fragment>
);

export default Home;