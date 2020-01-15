import { connect } from 'react-redux';
import { AddressInputComponent } from '../view';

import searchForAddress from '../operations';

const mapStateToProps = (state) => ({
  term: state.searchAddr,
  isSearching: state.isSearching,
});

const mapDispatchToProps = (dispatch) => ({
  searchButtonClick: (term) => searchForAddress(dispatch, term),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressInputComponent);
