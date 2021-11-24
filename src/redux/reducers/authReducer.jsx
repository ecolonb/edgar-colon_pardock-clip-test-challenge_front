import { types } from "../types/types";
const initialState = {
  isLoading: false,
  userLogged: null,
  loginError: false,
  errorMessage: ""
};

export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.authStartLogin:
      return {
        ...state,
        isLoading: true
      };
    case types.authSetUserLogged:
      return {
        ...state,
        userLogged: action.payload
      };
    case types.authSetLoginError:
      return {
        ...state,
        loginError: action.payload.error,
        errorMessage: action.payload.message
      };

    default:
      return state;
  }
};
