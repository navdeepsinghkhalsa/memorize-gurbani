import React from 'react';
// Components
import TitleBar from '../TitleBar';

const About = () => (
  <React.Fragment>
    <TitleBar text="About" />
    {'This application is a work in progress. Follow progress on '}
    <a href="https://github.com/navdeepsinghkhalsa/memorize-gurbani" target="_blank" rel="noopener noreferrer">GitHub</a>
  </React.Fragment>
);

export default About;
