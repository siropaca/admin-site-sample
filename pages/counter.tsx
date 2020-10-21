import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice, { CounterState } from '../src/slices/counter';

const CounterPage: React.FC = () => {
  const useCounterState = () => {
    return useSelector((state: { counter: CounterState }) => state);
  };

  const state = useCounterState().counter;

  const dispatch = useDispatch();

  const onClickIncrement = () => {
    dispatch(counterSlice.actions.incrementCounter(1));
  };

  const onClickDecrement = () => {
    dispatch(counterSlice.actions.decrementCounter(1));
  };

  return (
    <>
      <button type="button" onClick={onClickIncrement}>
        ふやす
      </button>
      <button type="button" onClick={onClickDecrement}>
        へらす
      </button>
      <p>ねこが{state.count} 匹いる</p>
    </>
  );
};

export default CounterPage;
