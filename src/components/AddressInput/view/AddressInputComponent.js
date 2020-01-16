import React from 'react';
import propTypes from 'prop-types';

// Presentational Component
const AddressInputComponent = ({ searchButtonClick, strings }) => {
  let input;

  return (
    <div className="addressInput">
      <input
        ref={(node) => {
          input = node;
        }}
        placeholder={strings.placeholder}
        className="form-control"
      />

      <button
        type="button"
        onClick={() => searchButtonClick(input.value)}
        className="button"
      >
        {strings.button_text}
      </button>
    </div>
  );
};

AddressInputComponent.defaultProps = {
  strings: {
    placeholder: '',
    button_text: 'Submit',
  },
};

AddressInputComponent.propTypes = {
  searchButtonClick: propTypes.func.isRequired,
  strings: propTypes.shape({
    placeholder: propTypes.string,
    button_text: propTypes.string,
  }),
};

export default AddressInputComponent;
