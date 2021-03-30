import axios from "axios";
// import { store } from "src/redux/store";
import baseURL from "src/configs/baseURL.config";
// import { userLogout } from "src/redux/auth/auth.actions";

// AXIOS GLOBAL CONFIG
axios.defaults.baseURL = `https://${baseURL}/api/`;
axios.interceptors.request.use((request) => {
   // const reduxStore = store.getState();
   // const { auth } = reduxStore;
   // request.headers["Authorization"] = `Bearer ${token}`;

   return request;
});

axios.interceptors.response.use(
   (response) => response,
   (error) => {
      return Promise.reject(error);
   }
);

export default axios;
