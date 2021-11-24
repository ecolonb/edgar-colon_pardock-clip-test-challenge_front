import { types } from "../types/types";

export const authSetLoginError = (e) => ({
  type: types.authSetLoginError,
  payload: e
});

export const authSetUserLogged = (e) => ({
  type: types.authSetUserLogged,
  payload: e
});
