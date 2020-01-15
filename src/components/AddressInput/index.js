import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import propTypes from 'prop-types';
import logger from 'redux-logger';

import AddressInputComponent from './containers/AddressInputContainer';
import reducer from './reducer';
import { FINISH_ADDRESS_VALIDATION } from './types';

let userCallBack;

// eslint-disable-next-line no-unused-vars
const getAddressValueFromStore = (store) => (next) => (action) => {
  // return address back to dev:
  if (action.type === FINISH_ADDRESS_VALIDATION) {
    if (action.addressFound) {
      userCallBack({
        success: action.addr,
      });
    } else {
      userCallBack({
        error: 'address could not be found',
      });
    }
  }

  // continue processing this action
  return next(action);
};

// const middleware = [logger, getAddressValueFromStore];

const store = createStore(
  reducer,
  // applyMiddleware(logger),
  applyMiddleware(getAddressValueFromStore),
);

const AddressInput = ({ callBack }) => {
  // to return the address to the user:
  userCallBack = callBack;

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
