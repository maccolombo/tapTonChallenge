
import axios from "axios";

const create = (config: any) => {
    let api = axios.create({ baseURL: config.baseUrl });

    api.interceptors.request.use(async (reqConfig) => {
        return reqConfig;
    });

    api.interceptors.response.use(
        (resp) => resp.data,
        (error) => {
            if (401 === error.response.status) {
                return Promise.reject(error.response);
            }
            throw error.response.data.errors
        }
    );

    return api;
};

export default { create };
