import React from 'react';

import './App.scss';
import { MainSection } from './layout/mainSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <MainSection />
    </div>
  );
};

export { App };