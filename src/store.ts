import { Store, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterSlice, { initialState as counterState } from './slices/counter';
import headerSlice, { initialState as headerState } from './slices/header';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  header: headerSlice.reducer
});

const preloadedState = {
  counter: counterState,
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
