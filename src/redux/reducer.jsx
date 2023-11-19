
import { REGISTER_SUCCESS, REGISTER_FAILURE } from './action.jsx';

const initialState = {
  data: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
