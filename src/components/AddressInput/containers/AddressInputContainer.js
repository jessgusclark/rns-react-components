import { connect } from 'react-redux';
import { AddressInputComponent } from '../view';
import searchForAddress from '../operations';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  searchButtonClick: (term) => {
    dispatch(searchForAddress(term));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressInputComponent);
