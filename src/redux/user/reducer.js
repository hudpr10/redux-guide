import UserActionTypes from "./action-types";

const initialState = {
  currentUser: null,
}

// Reducer do usuário
const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case UserActionTypes.LOGIN: // boa prática para não errar na string
      return { ...state, currentUser: action.payload };

    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
      
    default:
      return state;
  }
}

export default userReducer
