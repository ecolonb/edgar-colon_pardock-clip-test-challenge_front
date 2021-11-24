import { types } from "../types/types";

export const customerSetAllItems = (e) => ({
  type: types.customerSetAllItems,
  payload: e
});

export const customerSetIsEditingOrNew = (e) => ({
  type: types.customerSetIsEditingOrNew,
  payload: e
});

export const customerAddNew = (e) => ({
  type: types.customerAddNew,
  payload: e
});
