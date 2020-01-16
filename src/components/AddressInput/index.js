import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import propTypes from 'prop-types';
import logger from 'redux-logger';

import AddressInputComponent from './containers/AddressInputContainer';
import reducer from './reducer';
import callbackMiddleware from './middleware';
import { stringDefaults, stringTypes } from './propTypes';

const middleware = [logger, callbackMiddleware.middleware];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

const AddressInput = ({ callBack, strings }) => {
  // to return the address to the user:
  callbackMiddleware.setVariable(callBack);

  return (
    <Provider store={store}>
      <AddressInputComponent
        strings={strings}
      />
    </Provider>
  );
};

AddressInput.defaultProps = {
  strings: stringDefaults,
};

AddressInput.propTypes = {
  callBack: propTypes.func.isRequired,
  strings: stringTypes,
};

export default AddressInput;
