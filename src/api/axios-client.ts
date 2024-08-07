import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ParamsUrl } from "type";
import queryString from "query-string";
import { REACT_APP_API_URL, handleGetHashCode } from "const";

const axiosClient = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        "content-type": "application/json",
    },
    responseType: "json",
    paramsSerializer: (params: ParamsUrl) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const xs = handleGetHashCode();
        if (xs) {
            config.headers.Authorization = `Bearer ${xs}`;
        }
        return config;
    },
    function error() {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error: string) => {
        throw error;
    }
);

export default axiosClient;
