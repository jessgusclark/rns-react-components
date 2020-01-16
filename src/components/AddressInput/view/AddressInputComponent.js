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
        placeholder=""
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
    button_text: 'Submit',
  },
};

AddressInputComponent.propTypes = {
  searchButtonClick: propTypes.func.isRequired,
  strings: propTypes.shape({
    button_text: propTypes.string,
  }),
};

export default AddressInputComponent;
