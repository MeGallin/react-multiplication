import React from 'react';
import './Home.scss';

import { TimesTableComponent } from '../../components/TimesTableComponent/TimesTableComponent';

export const Home = () => {
  return (
    <div className="home__wrapper">
      <TimesTableComponent />
    </div>
  );
};
