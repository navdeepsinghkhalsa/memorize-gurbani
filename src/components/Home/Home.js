import React from 'react';
// Components
import TitleBar from '../TitleBar';
import BaniList from './BaniList/BaniList';
import ChooseMode from './ChooseMode/ChooseMode';

const Home = () => (
  <>
    <TitleBar text="Memorize Gurbani" />
    <ChooseMode />
    <BaniList />
  </>
);

export default Home;
