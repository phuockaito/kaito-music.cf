import axiosClient from "./axios-client";
import { AccountResponse, LoginType, RegisterType } from "type";

const accountAPI = {
    loginGoogle(token: string): Promise<AccountResponse> {
        const url = "account/google-login";
        return axiosClient.post(url, { token });
    },
    getProfile(): Promise<AccountResponse> {
        const url = "account/profile";
        return axiosClient.get(url);
    },
    postLogin(data: LoginType): Promise<AccountResponse> {
        const url = "account/login";
        return axiosClient.post(url, data);
    },
    postRegister(data: RegisterType): Promise<AccountResponse> {
        const url = "account/register";
        return axiosClient.post(url, data);
    },
};
export default accountAPI;
