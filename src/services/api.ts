
import axios from "axios";
//import humps from "humps";


const create = (config) => {
    let api = axios.create({ baseURL: config.baseUrl });

    api.interceptors.request.use(async (reqConfig) => {
        // const authToken = await asyncStorage.getAuthToken();

        // if (authToken) {
        //     reqConfig.headers.Authorization = `${authToken}`;
        // }

        // reqConfig.data = humps.decamelizeKeys(reqConfig.data);
        // reqConfig.params = humps.decamelizeKeys(reqConfig.params);

        return reqConfig;
    });

    api.interceptors.response.use(
        (resp) => resp.data,
        (error) => {
            console.log("error> : ", error)
            if (401 === error.response.status) {
                console.log('error 401');
                //asyncStorage.toLogin();
                return Promise.reject(error.response);
                //return Promise.reject(humps.camelizeKeys(error.response));
            }
            throw error.response.data.errors
        }
    );

    return api;
};

export default { create };
