import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { menuReducer } from './menuReducer';
import { uiReducer } from './uiReducer';
import { platoReducer } from './platoReducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  plato: platoReducer,
  ui: uiReducer,
  auth: authReducer
});