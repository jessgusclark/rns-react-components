import {
  START_ADDRESS_VALIDATION, FINISH_ADDRESS_VALIDATION,
} from './types';

const initialState = {
  searching: false,
  addr: '',
};

const addressInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_ADDRESS_VALIDATION:
      return {
        ...state,
        searching: true,
        addr: state.addr,
      };
    case FINISH_ADDRESS_VALIDATION:
      return {
        ...state,
        searching: false,
      };
    default:
      return state;
  }
};

export default addressInputReducer;
