# RNS React Components

Once complete, this npm package will contain reuable components for RNS.

To show all of the components that are offered, install and run the app.

```
npm install
npm run
```

## AddressInput

Accepts an address or a RSK domain name and on success, it resolves an address.

- callback (required) - the function that will return either an address or an error.
- strings (optional) - optional parameters to change text.

### Simple Usage:

```
<AddressInput
  callBack={callBack}
/>
```

### Full/Expanded Useage: 

```
<AddressInput
  callBack={callBack}
  strings={
    {
      label: 'Address:',
      button_text: 'Search',
      placeholder: 'enter address or domain',
    }
  }
/>
```