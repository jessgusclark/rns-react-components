import {
  START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION, RETURN_VALID_ADDRESS,
} from './types';

const initialState = {
  isSearching: false,
  searchAddr: '',
  returnAddress: '',
  // result: '',
};

const addressInputReducer = (state = initialState, action) => {
  console.log('addressInputReducer hit');
  switch (action.type) {
    case START_ADDRESS_VALIDATION:
      return {
        ...state,
        isSearching: true,
        searchAddr: action.addr,
      };
    case RETURN_VALID_ADDRESS:
      return {
        ...state,
        returnAddress: action.addr,
      }
    case FINISH_ADDRESS_VALIDATION:
      return {
        ...state,
        isSearching: false,
      };
    default:
      return state;
  }
};

export default addressInputReducer;
