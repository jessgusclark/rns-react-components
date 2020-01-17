import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import propTypes from 'prop-types';
import logger from 'redux-logger';

import AddressInputComponent from './containers/AddressInputContainer';
import reducer from './reducer';
import callbackMiddleware from './middleware';
import {
  stringDefaults, stringTypes,
  classNameDefaults, classNameTypes,
} from './propTypes';

const middleware = [logger, callbackMiddleware.middleware];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

const AddressInput = ({ callBack, strings, classNames, injectHtml }) => {
  // to return the address to the user:
  callbackMiddleware.setVariable(callBack);

  return (
    <Provider store={store}>
      <AddressInputComponent
        strings={strings}
        classNames={classNames}
        injectHtml={injectHtml}
      />
    </Provider>
  );
};

AddressInput.defaultProps = {
  strings: stringDefaults,
  classNames: classNameDefaults,
  injectHtml: {
    afterInput: <></>,
  },
};

AddressInput.propTypes = {
  callBack: propTypes.func.isRequired,
  classNames: classNameTypes,
  strings: stringTypes,
  injectHtml: propTypes.shape({
    afterInput: propTypes.element,
  }),
};

export default AddressInput;
