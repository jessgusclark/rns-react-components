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
      <h2>Debug Log & Test Section</h2>
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
      <hr />
      <p>
        Valid Adddress to copy: 0x3Dd03d7d6c3137f1Eb7582Ba5957b8A2e26f304A
      </p>
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
