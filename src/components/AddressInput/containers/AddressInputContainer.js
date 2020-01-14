import { connect } from 'react-redux';
import { AddressInputComponent } from '../view';
import searchForAddress from '../operations';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line no-console
  onClick: (term) => {
    dispatch(searchForAddress(term));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressInputComponent);
