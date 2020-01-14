import {
  START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export const startAddressValidation = (term) => ({
  type: START_ADDRESS_VALIDATION,
  term,
});

export const finishAddressValidation = () => ({
  type: FINISH_ADDRESS_VALIDATION,
});
