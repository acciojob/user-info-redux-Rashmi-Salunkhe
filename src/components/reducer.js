import { UPDATE_NAME, UPDATE_EMAIL } from './action';

// Initial State
const initialState = {
  name: '',
  email: '',
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
