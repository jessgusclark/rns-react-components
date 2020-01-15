import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import propTypes from 'prop-types';
import logger from 'redux-logger';

import AddressInputComponent from './containers/AddressInputContainer';
import reducer from './reducer';
import callbackMiddleware from './middleware';

const middleware = [logger, callbackMiddleware.middleware];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

const AddressInput = ({ callBack }) => {
  // to return the address to the user:
  callbackMiddleware.setVariable(callBack);

  return (
    <Provider store={store}>
      <AddressInputComponent />
    </Provider>
  );
};

AddressInput.propTypes = {
  callBack: propTypes.func.isRequired,
};

export default AddressInput;
