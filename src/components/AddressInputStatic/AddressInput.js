import React from 'react';
import propTypes from 'prop-types';

import Helpers from './helpers';

const AddressInput = ({
  response,
  textDefaults = {},
}) => {
  const placeholderText = textDefaults.placeholder ? textDefaults.placeholder : '';
  const submitText = textDefaults.submit ? textDefaults.submit : 'Submit';

  let input;

  const checkingValue = (value) => {
    if (!input.value) {
      return { error: 'no input provided' };
    }

    if (Helpers.isValid(value)) {
      return value;
    }

    // does it end with .rsk?
    // append .rsk
    // is it a valid RSK domain?
    // look up domain address

    return { error: 'input is not valid or not an rsk address.' };
  };

  const handleClick = () => {
    response(checkingValue(input.value));
  };

  return (
    <div className="address">
      <input
        type="text"
        className="form-control"
        ref={(node) => {
          input = node;
        }}
        placeholder={placeholderText}
      />
      <input
        type="button"
        className="button"
        value={submitText}
        onClick={handleClick}
      />
    </div>
  );
};  

AddressInput.defaultProps = {
  textDefaults: {
    submit: 'Submit',
    placeholder: '',
  },
};

AddressInput.propTypes = {
  textDefaults: propTypes.shape({
    submit: propTypes.string,
    placeholder: propTypes.string,
  }),
  response: propTypes.func.isRequired,
};

export default AddressInput;
