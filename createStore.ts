import { Store, combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterSlice, { initialState as counterState } from './slice';

const rootReducer = combineReducers({
  counter: counterSlice.reducer
});

const preloadedState = () => {
  return { counter: counterState };
};

const createStore = () => {
  const middlewareList = [...getDefaultMiddleware()];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState()
  });
};

export default createStore;
