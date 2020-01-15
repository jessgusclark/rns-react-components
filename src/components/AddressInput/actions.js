import {
  START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION, RETURN_VALID_ADDRESS,
} from './types';

// ActionCreators

export const startAddressValidation = (addr) => ({
  type: START_ADDRESS_VALIDATION,
  addr,
});

export const returnValidAddress = (addr) => ({
  type: RETURN_VALID_ADDRESS,
  addr,
});

export const finishAddressValidation = (addressFound = true) => ({
  type: FINISH_ADDRESS_VALIDATION,
  addressFound: !!(addressFound),
});
