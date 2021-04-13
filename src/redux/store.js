import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import phoneBookReducer from './phonebook/phonebook-reducer';
import authReducer from './auth/auth-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebook: phoneBookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
