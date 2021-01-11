import axios from "axios";

const authApi = {
    login(params) {
        return axios.post("auth/login", { ...params });
    },
};

export default authApi;
