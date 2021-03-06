import { connect } from 'react-redux';
import { AddressInputComponent } from '../view';

import searchForAddress from '../operations';

const mapStateToProps = (state, ownProps) => ({
  strings: ownProps.strings,
  classNames: ownProps.classNames,
  injectHtml: ownProps.injectHtml,
});

const mapDispatchToProps = (dispatch) => ({
  searchButtonClick: (term) => searchForAddress(dispatch, term),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressInputComponent);
