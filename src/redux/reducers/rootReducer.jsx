import { combineReducers } from "redux";

import { uiReducer } from "./uiReducer";
import { authReducer } from "./authReducer";
import { customerReducer } from "./customerReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  customers: customerReducer,
  auth: authReducer
});
