import {
  startAddressValidation,
  finishAddressValidation,
} from './actions';

// export default (address) => {
export default address => (dispatch) => {
  // eslint-disable-next-line no-console
  console.log('operations file hit', address);

  /*dispatch({
    type: 'START_ADDRESS_VALIDATION',
    term: address,
  });
*/

// return dispatch(finishAddressValidation());
  // dispatch(searchingFor());

  return {
    type: 'START_ADDRESS_VALIDATION',
    result: address,
  };
};
