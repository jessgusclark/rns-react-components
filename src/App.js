import React from 'react';
import AddressInput from './components/AddressInput';

function App() {

  const callBack = (addr) => {
    console.log('response from the app!', addr);
  };

  return (
    <div>
      <AddressInput
        callBack={callBack}
      />
    </div>
  );
}

export default App;
