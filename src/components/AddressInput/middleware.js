import { FINISH_ADDRESS_VALIDATION } from './types';

let userCallBack;

const returnAddress = (found, addr) => {
  if (found) {
    userCallBack(addr);
  } else {
    userCallBack({ error: 'input could not be validated as an address' });
  }
};

// eslint-disable-next-line no-unused-vars
const middleware = (store) => (next) => (action) => {
  // return address back to dev:
  if (action.type === FINISH_ADDRESS_VALIDATION) {
    returnAddress(action.addressFound, action.addr);
  }

  return next(action);
};

const setVariable = (func) => {
  userCallBack = func;
};

export default { middleware, setVariable };
