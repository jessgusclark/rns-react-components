import { connect } from 'react-redux';
import { AddressInputComponent } from '../view';

import searchForAddress from '../operations';

// will be used in the future to pass user's display vars:
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  searchButtonClick: (term) => searchForAddress(dispatch, term),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressInputComponent);
