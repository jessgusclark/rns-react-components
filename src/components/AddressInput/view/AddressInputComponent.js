import React from 'react';
import propTypes from 'prop-types';

// Presentational Component
const AddressInputComponent = ({ searchButtonClick, strings }) => {
  let input;

  return (
    <div className="addressInput">
      {strings.label && (
        <label htmlFor="rns-address-input">
          {strings.label}
        </label>
      )}

      <input
        ref={(node) => {
          input = node;
        }}
        placeholder={strings.placeholder}
        className="form-control"
        id={strings.label ? 'rns-address-input' : ''}
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
    label: '',
    placeholder: '',
    button_text: 'Submit',
  },
};

AddressInputComponent.propTypes = {
  searchButtonClick: propTypes.func.isRequired,
  strings: propTypes.shape({
    label: propTypes.string,
    placeholder: propTypes.string,
    button_text: propTypes.string,
  }),
};

export default AddressInputComponent;
