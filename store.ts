import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import headerSlice, {
  initialState as headerState
} from './lib/slices/headerSlice';

const rootReducer = combineReducers({
  header: headerSlice
});

const preloadedState = {
  header: headerState
};

export default function createStore() {
  return configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
    middleware: [...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV !== 'production'
  });
}
