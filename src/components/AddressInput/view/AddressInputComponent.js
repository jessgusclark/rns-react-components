import React from 'react';
import propTypes from 'prop-types';

// Presentational Component
const AddressInputComponent = ({ searchButtonClick, term, isSearching, test }) => {
  let input;
  console.log('view props', isSearching);
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
        <li>
          Test:
          {test}
        </li>
      </ul>

    </div>
  );
};

AddressInputComponent.propTypes = {
  searchButtonClick: propTypes.func.isRequired,

  // debug props:
  test: propTypes.string.isRequired,
  term: propTypes.string,
  isSearching: propTypes.bool.isRequired,
};

export default AddressInputComponent;
