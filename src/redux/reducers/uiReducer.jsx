import { types } from "../types/types";

const initialState = {
  isLoading: true,
  isEditingCustomer: false
};

export const uiReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.uiSetLoading:
      console.log("action: ", action);
      return {
        ...state,
        isLoading: action.payload
      };
    case types.uiSetEditingCustomer:
      console.log("action--->>>: ", action);
      return {
        ...state,
        isEditingCustomer: action.payload
      };

    default:
      return state;
  }
};
