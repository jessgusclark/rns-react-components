import {
  startAddressValidation,
} from './actions';

export default (dispatch, addr) => {
  console.log('operations.js hit');

  dispatch(startAddressValidation(addr));

};
