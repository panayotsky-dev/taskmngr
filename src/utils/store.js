import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Load state from local storage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

// Save state to local storage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    // Handle errors
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadStateFromLocalStorage(),
});

// Save state to local storage on store update
store.subscribe(() => {
  const state = store.getState();
  saveStateToLocalStorage(state);
});

export default store;
