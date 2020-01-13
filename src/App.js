import React from 'react';
import AddressInput from './components/AddressInput/AddressInput';

function App() {

  const handleAddressClick = (event) => {
    console.log("AddressClick", event);
  }

  const textDefaults = {
    "submit": "Submit"
  }

  return (
    <div className="App">
      <AddressInput
        response={(event) => handleAddressClick(event)}
        textDefaults={textDefaults}
      />

    </div>
  );
}

export default App;
