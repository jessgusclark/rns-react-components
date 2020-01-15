import Web3 from 'web3';

import {
  startAddressValidation,
  returnValidAddress,
  finishAddressValidation,
} from './actions';


export default (dispatch, addr) => {
  dispatch(startAddressValidation(addr));

  // a provicer is not needed since we are not accessing the network
  const web3 = new Web3(null);

  // check if the address is a valid address:
  if (web3.utils.isAddress(addr)) {
    dispatch(returnValidAddress(addr));
    return dispatch(finishAddressValidation(true));
  }

  // check to see if the input is a domain:
  const domain = addr.endsWith('.rsk') ? addr : `${addr}.rsk`;

  // mocked!
  // the following will be replaced with call to 3rd party package once
  // it is complete.
  if (domain === 'jesse.rsk') {
    dispatch(returnValidAddress('0x12345678901234567890'));
    return dispatch(finishAddressValidation(true));
  }

  // not valid
  return dispatch(finishAddressValidation(false));
};
