import { combineReducers } from 'redux';
import counterSlice from './slices/counter';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export default rootReducer;
