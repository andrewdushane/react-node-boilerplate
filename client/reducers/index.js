import { combineReducers } from 'redux';

import { EXAMPLE } from '../sagas';

import { CLEAR_MESSAGE } from '../actions';

const example = (state = {}, { type, status, message }) => {
  switch (type) {
    case EXAMPLE:
      if (status === 'success') {
        return {
          ...state,
          message,
        };
      }
      break;
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    default: return state;
  }
  return state;
};

const rootReducer = combineReducers({ example });

export default rootReducer;
