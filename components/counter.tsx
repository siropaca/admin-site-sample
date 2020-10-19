import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import counterSlice, { CounterState } from '../slice';

const Counter: React.FC = () => {
  const useCounterState = () => {
    return useSelector((state: { counter: CounterState }) => state);
  };

  const dispatch = useDispatch();
  const state = useCounterState().counter;

  const increment = () => {
    dispatch(counterSlice.actions.incrementCounter(1));
  };

  const decrement = () => {
    dispatch(counterSlice.actions.decrementCounter(1));
  };

  return (
    <div>
      <h1>
        Count: <span>{state.count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
