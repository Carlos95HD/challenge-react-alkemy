import React from 'react';
import { Provider } from 'react-redux';
import { LoginScreen } from './components/login/LoginScreen';
import { store } from './store/store';

export const MenuApp = () => {
  return (
    <Provider store={ store }>
      <LoginScreen />
    </Provider>
  )
};
