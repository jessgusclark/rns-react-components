import { connect } from 'react-redux';
import { AddressInputComponent } from '../view';

import searchForAddress from '../operations';

const mapStateToProps = (state) => ({
  searchAddress: state.searchAddr,
  returnAddress: state.returnAddress,
  isSearching: state.isSearching,
  addressFound: state.addressFound,
});

const mapDispatchToProps = (dispatch) => ({
  searchButtonClick: (term) => searchForAddress(dispatch, term),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressInputComponent);
