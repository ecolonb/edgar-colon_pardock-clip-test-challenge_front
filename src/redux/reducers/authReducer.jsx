import { types } from "../types/types";
// {
//     name: "Edd test",
//     lastName: "Test2134",
//     email: "edd@test.com"
//   }
const initialState = {
  isLoading: false,
  userLogged: null
};

export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.authStartLogin:
      return {
        ...state,
        isLoading: true
      };
    case types.authLogin:
      return {
        ...state,
        userLogged: action.payload
      };
    case types.authLogout:
      return {
        ...state,
        userLogged: null
      };
    default:
      return state;
  }
};
