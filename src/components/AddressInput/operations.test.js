import addrCheck from './operations';
import { START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION } from './types';

describe('addressInput operations', () => {

  const testAddress = '0x3Dd03d7d6c3137f1Eb7582Ba5957b8A2e26f304A';
  const testAddress2 = '0xF87dde81021099DA7AA9B38B627A48C50dE419d8';

  // local mocked store:
  let store = [];
  const dispatch = (action) => {
    store.push(action);
  };

  beforeEach(() => {
    store = [];
  });

  it('should match flow with valid address', () => {
    addrCheck(dispatch, testAddress);

    // check the flow:
    expect(store[0].type).toBe(START_ADDRESS_VALIDATION);
    expect(store[0].addr).toBe(testAddress);
    expect(store[1].type).toBe(FINISH_ADDRESS_VALIDATION);
    expect(store[1].addr).toBe(testAddress);
    expect(store[1].addressFound).toBeTruthy();
  });

  it('should return instantly if no address is provided', () => {
    addrCheck(dispatch, '');
    expect(store.length).toBe(0);
  });

  it('should return true with valid address (2)', () => {
    addrCheck(dispatch, testAddress2);

    expect(store[1].type).toBe(FINISH_ADDRESS_VALIDATION);
    expect(store[1].addr).toBe(testAddress2);
    expect(store[1].addressFound).toBeTruthy();
  });

  it('should return false with invalid address', () => {
    addrCheck(dispatch, '0x123456780');

    expect(store[1].type).toBe(FINISH_ADDRESS_VALIDATION);
    expect(store[1].addressFound).toBeFalsy();
  });

  // this is currently mocked and needs to be replaced
  it('should return true with valid domain', () => {
    addrCheck(dispatch, 'jesse.rsk');

    expect(store[1].type).toBe(FINISH_ADDRESS_VALIDATION);
    expect(store[1].addressFound).toBeTruthy();
  });

  it('should return true with a valid domain with unusual capitalizations', () => {
    addrCheck(dispatch, 'jeSSE.rsk');

    expect(store[1].type).toBe(FINISH_ADDRESS_VALIDATION);
    expect(store[1].addressFound).toBeTruthy();
  });

  // unknown if this will be kept
  it('should return true with a valid domain when .rsk is not present', () => {
    addrCheck(dispatch, 'jesse');

    expect(store[1].type).toBe(FINISH_ADDRESS_VALIDATION);
    expect(store[1].addressFound).toBeTruthy();
  });

});
