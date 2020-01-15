import {
  START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION,
} from './types';

const initialState = {
  isSearching: false,
  searchAddr: '',
  returnAddress: '',
  addressFound: false,
};

const addressInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_ADDRESS_VALIDATION:
      return {
        ...state,
        isSearching: true,
        searchAddr: action.addr,
        returnAddress: '',
      };
    case FINISH_ADDRESS_VALIDATION:
      return {
        ...state,
        isSearching: false,
        returnAddress: action.addr,
        addressFound: !!(action.addr),
      };
    default:
      return state;
  }
};

export default addressInputReducer;
