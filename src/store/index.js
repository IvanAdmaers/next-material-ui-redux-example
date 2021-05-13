import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

// Reducers
import usersReducer from 'src/reducers/usersReducer';

// Connection redux devtools if mode does not equal production
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

// Combine reducers
const combinedReducer = combineReducers({
  users: usersReducer,
});

// Storage initialization
const initStore = () => {
  return createStore(combinedReducer, bindMiddleware([thunkMiddleware]));
};

// export an assembled wrapper
export const wrapper = createWrapper(initStore);
