import UserActionTypes from "./action-types";

export const loginUser = (payload) => ({
  type: UserActionTypes.LOGIN, // boa prática para não errar na string
  payload: payload
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT
})