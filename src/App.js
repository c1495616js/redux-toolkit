import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import counterSlice from './slices/counter';

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // increment
  const inc = () => {
    const incAction = counterSlice.actions.increment();
    dispatch(incAction);
  };

  // decrement
  const dec = () => {
    const decAction = counterSlice.actions.decrement();
    dispatch(decAction);
  };
  return (
    <div className="App">
      <div className="number">{count}</div>
      <div className="btn-gp">
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
}

export default App;
