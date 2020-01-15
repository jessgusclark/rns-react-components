/* eslint-disable no-undef */
import { startAddressValidation, finishAddressValidation } from './actions';
import { START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION } from './types';


describe('addressInput actions', () => {
  it('should start the address lookup with address', () => {

    const expectedAction = {
      addr: '0x12345',
      type: START_ADDRESS_VALIDATION,
    };

    expect(startAddressValidation('0x12345')).toEqual(expectedAction);
  });

  it('should finish the address lookup without address', () => {
    const expectedAction = {
      type: FINISH_ADDRESS_VALIDATION,
      addr: '',
      addressFound: false,
    };

    expect(finishAddressValidation('')).toEqual(expectedAction);
  });

  it('should finish the address lookup with valid address', () => {
    const expectedAction = {
      type: FINISH_ADDRESS_VALIDATION,
      addr: '0x12345',
      addressFound: true,
    };

    expect(finishAddressValidation('0x12345')).toEqual(expectedAction);
  });
});
