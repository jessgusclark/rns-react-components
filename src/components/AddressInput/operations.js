import Web3 from 'web3';
import { provider } from '../../web3Provider';
import {
  startAddressValidation,
  returnValidAddress,
  finishAddressValidation,
} from './actions';

export default (dispatch, addr) => {
  dispatch(startAddressValidation(addr));

  const web3 = new Web3(provider());

  // check if the address is a valid address:
  if (web3.utils.isAddress(addr)) {
    dispatch(returnValidAddress(addr));
    return dispatch(finishAddressValidation());
  }


  return dispatch(finishAddressValidation());
};
