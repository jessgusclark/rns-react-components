import Web3 from 'web3';

import {
  startAddressValidation,
  finishAddressValidation,
} from './actions';


export default (dispatch, addr) => {
  dispatch(startAddressValidation(addr));

  // a provicer is not needed since we are not accessing the network
  const web3 = new Web3(null);

  // check if the address is a valid address:
  if (web3.utils.isAddress(addr)) {
    return dispatch(finishAddressValidation(addr));
  }

  // check to see if the input is a domain:
  const domain = addr.endsWith('.rsk') ? addr : `${addr}.rsk`;

  // mocked!
  // the following will be replaced with call to 3rd party package once
  // it is complete.
  // dispatch(requestAddressFromDomain());
  if (domain === 'jesse.rsk') {
    return dispatch(finishAddressValidation('0x12345678901234567890'));
    // dispatch(resolveAddressFromDomain());
  }

  // not valid
  return dispatch(finishAddressValidation(''));
};
