import { authActionTypes } from "./auth.types";
// import authApi from "./auth.api.js";

export const userLogout = () => ({
   type: authActionTypes.USER_LOG_OUT,
});
