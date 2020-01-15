import {
  START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION,
} from './types';

const initialState = {
  isSearching: false,
  // validAddress: false,
  searchAddr: '',
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
