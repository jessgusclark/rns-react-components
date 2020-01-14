import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import AddressInputComponent from './containers/AddressInputContainer';
import reducer from './reducer';

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

const AddressInput = () => (
  <Provider store={store}>
    <AddressInputComponent />
  </Provider>
);

export default AddressInput;
