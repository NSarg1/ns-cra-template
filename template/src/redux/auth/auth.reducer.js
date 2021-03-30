import { authActionTypes } from "./auth.types.js";

const INITIAL_STATE = {
   user: null,
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
   switch (type) {
      case authActionTypes.USER_LOG_OUT:
         window.sessionStorage.clear();
         window.localStorage.clear();
         return INITIAL_STATE;

      default:
         return state;
   }
};

export default authReducer;
