import React from 'react';
import propTypes from 'prop-types';

// Presentational Component
const AddressInputComponent = ({ onClick }) => {
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
        onClick={() => onClick(input.value)}
      >
        Search
      </button>
    </div>
  );
};

AddressInputComponent.propTypes = {
  onClick: propTypes.func.isRequired,
}

export default AddressInputComponent;
