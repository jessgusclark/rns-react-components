import React from 'react';
import propTypes from 'prop-types';

const AddressInput = ({
  response,
  textDefaults = {},
}) => {

  const placeholderText = textDefaults.placeholder ? textDefaults.placeholder : '';
  const submitText = textDefaults.submit ? textDefaults.submit : 'Submit';

  let input;

  const handleClick = () => {
    response(input.value);
    input.value = '';
  }

  return(
    <div className="address">
      <input 
        type="text" 
        className="form-control"
        ref={node => {
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
}

AddressInput.propTypes = {
  response: propTypes.func.isRequired,
  placeholderText: propTypes.array,
}

export default AddressInput;