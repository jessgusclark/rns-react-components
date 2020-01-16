import React, { useState } from 'react';
import AddressInput from '../components/AddressInput';

function AddressInputDemo() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const callBack = (response) => {
    if (!response.error) {
      setAddress(response);
      setError('');
    } else {
      // handle error
      setAddress('');
      setError(response.error);
    }
  };

  return (
    <div>
      <h2>AddressInput Demo</h2>
      <AddressInput
        callBack={callBack}
        strings={
          {
            label: 'Address: ',
            button_text: 'Go!',
            placeholder: 'enter address or domain',
          }
        }
      />
      <hr />
      <p>{error}</p>
      <p>
        <strong>Return Address:</strong>
        {address}
      </p>
    </div>
  );
}

export default AddressInputDemo;
