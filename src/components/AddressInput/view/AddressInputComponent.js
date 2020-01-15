import React from 'react';
import propTypes from 'prop-types';

// Presentational Component
const AddressInputComponent = ({ searchButtonClick, term, isSearching }) => {
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

      <hr />
      <h2>Debug Log</h2>
      <ul>
        <li>
          Term:
          {term}
        </li>
        <li>
          {isSearching ? 'YES!' : 'No :('}
        </li>
      </ul>

    </div>
  );
};

AddressInputComponent.propTypes = {
  searchButtonClick: propTypes.func.isRequired,

  // debug props:
  term: propTypes.string,
  isSearching: propTypes.bool.isRequired,
};

export default AddressInputComponent;
