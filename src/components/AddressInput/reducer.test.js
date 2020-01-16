/* eslint-disable no-undef */
import reducer from './reducer';
import {
  START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION,
} from './types';

describe('addressInput reducer test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        isSearching: false,
        searchAddr: '',
        returnAddress: '',
        addressFound: false,
      });
  });

  it('should start request', () => {
    expect(
      reducer(undefined, {
        type: START_ADDRESS_VALIDATION,
        addr: '0x12345',
      }),
    ).toEqual({
      addressFound: false,
      isSearching: true,
      searchAddr: '0x12345',
      returnAddress: '',
    });
  });

  it('should finish the request with no address found', () => {
    expect(
      reducer(undefined, {
        type: FINISH_ADDRESS_VALIDATION,
        returnAddress: '',
      }),
    ).toEqual({
      addressFound: false,
      isSearching: false,
      searchAddr: '',
      returnAddress: undefined,
    });
  });

  it('should finish the request and return an address', () => {
    expect(
      reducer(undefined, {
        type: FINISH_ADDRESS_VALIDATION,
        addr: '0x12345',
      }),
    ).toEqual({
      addressFound: true,
      isSearching: false,
      searchAddr: '',
      returnAddress: '0x12345',
    });
  });

});
