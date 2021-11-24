import { types } from "../types/types";

const initialState = {
  isLoading: false,
  messageLoading: "Loading...",
  isEditingCustomer: false
};

export const uiReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.uiSetLoading:
      return {
        ...state,
        isLoading: action.payload
      };
    case types.uiSetEditingCustomer:
      return {
        ...state,
        isEditingCustomer: action.payload
      };

    default:
      return state;
  }
};
