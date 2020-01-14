import { connect } from 'react-redux';
import { AddressInputComponent } from '../view';


const mapStateToProps = (state) => ({
  term: state.term,
});
const mapDispatchToProps = () => ({
  onClick: (term) => { console.log('clicked container', term); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressInputComponent);
