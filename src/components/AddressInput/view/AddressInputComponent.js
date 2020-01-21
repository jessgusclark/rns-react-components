import React from 'react';
import propTypes from 'prop-types';

import {
  stringDefaults, stringTypes,
  classNameDefaults, classNameTypes,
} from '../propTypes';

// Presentational Component
const AddressInputComponent = ({
  searchButtonClick,
  strings,
  injectHtml,
  classNames,
}) => {
  let input;

  return (
    <div className={classNames.div}>
      {strings.label && (
        <label
          htmlFor="rns-address-input"
          className={classNames.label}
        >
          {strings.label}
        </label>
      )}

      <input
        ref={(node) => {
          input = node;
        }}
        placeholder={strings.placeholder}
        className={classNames.input}
        id={strings.label ? 'rns-address-input' : ''}
      />

      {injectHtml.afterInput && (
        injectHtml.afterInput
      )}

      <button
        type="button"
        onClick={() => searchButtonClick(input.value)}
        className={classNames.button}
      >
        {strings.button_text}
      </button>
    </div>
  );
};

AddressInputComponent.defaultProps = {
  strings: stringDefaults,
  classNames: classNameDefaults,
  injectHtml: {
    afterInput: <></>,
  },
};

AddressInputComponent.propTypes = {
  searchButtonClick: propTypes.func.isRequired,
  strings: stringTypes,
  classNames: classNameTypes,
  injectHtml: propTypes.shape({
    afterInput: propTypes.element,
  }),
};

export default AddressInputComponent;
