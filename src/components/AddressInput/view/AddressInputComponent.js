import React from 'react';
import propTypes from 'prop-types';

// Presentational Component
const AddressInputComponent = ({ searchButtonClick }) => {
  let input;

  return (
    <div>
      <input
        ref={(node) => {
          input = node;
        }}
      />

      <button
        type="submit"
        onClick={() => searchButtonClick(input.value)}
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
