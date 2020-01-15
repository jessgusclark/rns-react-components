import React, { useState } from 'react';
import AddressInput from './components/AddressInput';

function App() {
  const [address, setAddress] = useState('');

  const callBack = (response) => {
    if (response.success) {
      setAddress(response.success);
    }
    // handle error
  };

  return (
    <div>
      <AddressInput
        callBack={callBack}
      />
      <hr />
      <p>
        <strong>Return Address:</strong>
        {address}
      </p>
    </div>
  );
}

export default App;
