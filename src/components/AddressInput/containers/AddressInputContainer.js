import { connect } from 'react-redux';
import { AddressInputComponent } from '../view';

import { startAddressValidation, finishAddressValidation } from '../actions';
// import { START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION } from '../types';
// import searchForAddress from '../operations';

const mapStateToProps = (state) => ({
  search: state.term,
  isSearching: state.isSearching,
});

const mapDispatchToProps = (dispatch) => {
  // getState: domain => dispatch(getDomainState(domain)),
  // searchButtonClick: (term) => () => {
  //  searchForAddress(term);
  // },
  // searchButtonClick: term => dispatch(searchForAddress(term)),
  return {
    searchButtonClick: (addr) => {
      dispatch(startAddressValidation(addr));
      dispatch(finishAddressValidation());

      /*dispatch({
        type: FINISH_ADDRESS_VALIDATION,
        validAddress: true,
        result: '0x1234567890',
      });*/
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressInputComponent);
