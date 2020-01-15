import React from 'react';
import propTypes from 'prop-types';

// Presentational Component
const AddressInputComponent = ({searchButtonClick, searchAddress, returnAddress, isSearching}) => {
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
          Search Address:
          {searchAddress}
        </li>
        <li>
          Is Searching:
          {isSearching ? 'YES!' : 'No :('}
        </li>
        <li>
          Returning Valid Address:
          {returnAddress}
        </li>
      </ul>

    </div>
  );
};

AddressInputComponent.propTypes = {
  searchButtonClick: propTypes.func.isRequired,

  // debug props:
  searchAddress: propTypes.string,
  returnAddress: propTypes.string,
  isSearching: propTypes.bool.isRequired,
};

export default AddressInputComponent;
