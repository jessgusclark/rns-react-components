import { connect } from 'react-redux';
import { AddressInputComponent } from '../view';
import { START_ADDRESS_VALIDATION } from '../types';
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
      dispatch({
        type: START_ADDRESS_VALIDATION,
        term: addr,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressInputComponent);
