import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.scss';
import './index.scss';
import './fonts/MuseoSansCyrl-100.eot';
import './fonts/MuseoSansCyrl-100.ttf';
import './fonts/MuseoSansCyrl-100.woff';
import './fonts/MuseoSansCyrl-100.woff2';
import './fonts/MuseoSansCyrl-300.eot';
import './fonts/MuseoSansCyrl-300.ttf';
import './fonts/MuseoSansCyrl-300.woff';
import './fonts/MuseoSansCyrl-300.woff2';
import './fonts/MuseoSansCyrl-700.eot';
import './fonts/MuseoSansCyrl-700.ttf';
import './fonts/MuseoSansCyrl-700.woff';
import './fonts/MuseoSansCyrl-700.woff2';

import { Provider } from 'react-redux';
import store from './redux/store';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);

