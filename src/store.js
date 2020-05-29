// ./store.js
import { configureStore } from 'redux-starter-kit';
import rootReducer from './reducer';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  // handle hot reloading
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
