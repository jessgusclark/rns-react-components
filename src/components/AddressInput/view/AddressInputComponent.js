import React from 'react';
import propTypes from 'prop-types';

// Presentational Component
const AddressInputComponent = ({ searchButtonClick }) => {
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
        type="submit"
        onClick={() => searchButtonClick(input.value)}
        className="button"
      >
        Search
      </button>
    </div>
  );
};

AddressInputComponent.propTypes = {
  searchButtonClick: propTypes.func.isRequired,
};

export default AddressInputComponent;
