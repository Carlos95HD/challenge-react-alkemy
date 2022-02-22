import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

import './assets/css/styles.css';

export const MenuApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
};
