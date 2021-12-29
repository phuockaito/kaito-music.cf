import { createAsyncThunk } from "@reduxjs/toolkit";

import accountApi from "api/api-account";
import { LoginType, RegisterType } from "type";

export const loginGoogle = createAsyncThunk("/account/google-login", async (token: string) => {
    const response = await accountApi.loginGoogle(token);
    return response;
});

export const getProfile = createAsyncThunk("/account/profile", async () => {
    const response = await accountApi.getProfile();
    return response;
});

export const postLogin = createAsyncThunk("/account/login", async (data: LoginType) => {
    const response = await accountApi.postLogin(data);
    return response;
});

export const postRegister = createAsyncThunk("/account/register", async (data: RegisterType) => {
    const response = await accountApi.postRegister(data);
    return response;
});

export const postLogout = createAsyncThunk("/account/logout", () => {
    return;
});
