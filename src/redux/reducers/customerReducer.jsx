import { types } from "../types/types";

const initialState = {
  customersList: [],
  activeCustomer: null,
  isEditing: false,
  isNew: false
};

export const customerReducer = (state = initialState, action = "") => {
  switch (action.type) {
    case types.customerSetIsEditingOrNew:
      return {
        customersList: [...state.customersList],
        activeCustomer: action.payload.user,
        isEditing: action.payload.isEditing,
        isNew: action.payload.isNew
      };
    case types.customerAddNew:
      return {
        ...state,
        customersList: [action.payload, ...state.customersList]
      };
    case types.customerSetAllItems:
      return {
        ...state,
        customersList: action.payload
      };
    default:
      return state;
  }
};
