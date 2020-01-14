import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AddressInputComponent from './containers/AddressInputContainer';
import reducer from './reducer';

const AddressInput = () => (
  <Provider store={createStore(reducer)}>
    <AddressInputComponent />
  </Provider>
);

export default AddressInput;
