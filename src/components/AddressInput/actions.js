import {
  START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION, RETURN_VALID_ADDRESS,
} from './types';

// ActionCreators

// eslint-disable-next-line import/prefer-default-export
export const startAddressValidation = (addr) => ({
  type: START_ADDRESS_VALIDATION,
  addr,
});

export const returnValidAddress = (addr) => ({
  type: RETURN_VALID_ADDRESS,
  addr,
});

export const finishAddressValidation = (validAddr, resultAddr) => ({
  type: FINISH_ADDRESS_VALIDATION,
  resultAddr,
  validResult: validAddr,
});
