import {
  START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION,
} from './types';

// ActionCreators

export const startAddressValidation = (addr) => ({
  type: START_ADDRESS_VALIDATION,
  addr,
});

export const finishAddressValidation = (addr) => ({
  type: FINISH_ADDRESS_VALIDATION,
  addr,
  addressFound: !!(addr),
});
