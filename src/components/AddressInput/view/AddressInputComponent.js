import React from 'react';
import propTypes from 'prop-types';

import { stringDefaults, stringTypes } from '../propTypes';

// Presentational Component
const AddressInputComponent = ({ searchButtonClick, strings, injectHtml }) => {
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

      {injectHtml.afterInput && (
        injectHtml.afterInput
      )}

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
  strings: stringDefaults,
  injectHtml: {
    afterInput: <></>,
  },
};

AddressInputComponent.propTypes = {
  searchButtonClick: propTypes.func.isRequired,
  strings: stringTypes,
  injectHtml: propTypes.shape({
    afterInput: propTypes.element,
  }),
};

export default AddressInputComponent;
