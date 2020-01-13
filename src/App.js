import React from 'react';
import AddressInput from './components/AddressInput/AddressInput';

function App() {

  const handleAddressClick = (event) => {
    console.log("AddressClick", event);
  }

  const textDefaults = {
    "submit": "Submit it!",
    "placeholder": "Address or something here, please!"
  }

  return (
    <div className="App">
      <AddressInput
        callBack={(event) => handleAddressClick(event)}
        textDefaults={textDefaults}
      />

    </div>
  );
}

export default App;
