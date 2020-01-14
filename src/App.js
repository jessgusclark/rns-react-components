import React from 'react';
import AddressInput from './components/AddressInput';

function App() {
  const handleAddressClick = (event) => {
    // eslint-disable-next-line no-console
    console.log('AddressClick', event);
  };

  const textDefaults = {
    submit: 'Search',
    placeholder: 'Please enter an address.',
  };

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
