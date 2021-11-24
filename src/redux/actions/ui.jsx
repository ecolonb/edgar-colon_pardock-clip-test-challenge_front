import { types } from "../types/types";

export const uiSetloading = (e) => ({
  type: types.uiSetLoading,
  payload: e
});
export const uiSetEditingCustomer = (e) => ({
  type: types.uiSetEditingCustomer,
  payload: e
});

export const uiSetLoginError = (e) => ({
  type: types.authSetLoginError,
  payload: e
});
