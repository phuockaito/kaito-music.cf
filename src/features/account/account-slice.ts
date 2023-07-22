import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { notification } from "antd";

import { loginGoogle, getProfile, postLogin, postRegister, postLogout } from "./patch-api";
import { initialStateAccount } from "state";
import { CustomAccount, Account } from "type";
import { KEY, handleHashCode } from "const";

const accountSlice = createSlice({
    name: "account",
    initialState: initialStateAccount,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<CustomAccount>) => {
        builder
            .addCase(loginGoogle.pending, (state) => {
                state.loadingGoogle = true;
            })
            .addCase(loginGoogle.fulfilled, (state, action) => {
                const { data, accessToken } = action.payload;
                state.loadingGoogle = false;
                state.data = data;
                state.accessToken = accessToken;
                handleHashCode(accessToken);
                notification.success({
                    message: "Đăng nhập thành công",
                });
            })
            .addCase(loginGoogle.rejected, (state) => {
                state.loadingGoogle = false;
                state.error = true;
                notification.error({
                    message: "Đăng nhập thất bại",
                });
            });
        // getProfile
        builder
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                const { data, accessToken } = action.payload;
                state.loading = false;
                state.data = data;
                state.accessToken = accessToken;
            })
            .addCase(getProfile.rejected, (state) => {
                state.loading = false;
                state.accessToken = "";
                Cookies.remove(KEY);
            });
        // login
        builder
            .addCase(postLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(postLogin.fulfilled, (state, action) => {
                const { data, accessToken } = action.payload;
                handleHashCode(accessToken);
                state.data = data;
                state.accessToken = accessToken;
                state.loading = false;
                notification.success({
                    message: "Đăng nhập thành công",
                });
            })
            .addCase(postLogin.rejected, (state) => {
                state.loading = false;
                notification.error({
                    message: "Tài khoản hoặc mật khẩu không đúng!",
                });
            });
        //  log out the user
        builder.addCase(postLogout.fulfilled, (state) => {
            state.data = {} as Account;
            state.accessToken = "";
            Cookies.remove(KEY);
            notification.success({
                message: "Đăng xuất thành công",
            });
        });
        // register
        builder
            .addCase(postRegister.pending, (state) => {
                state.loading = true;
            })
            .addCase(postRegister.fulfilled, (state, action) => {
                const { data, accessToken } = action.payload;
                state.data = data;
                state.accessToken = accessToken;
                state.loading = false;
                handleHashCode(accessToken);
                notification.success({
                    message: "Đăng ký thành công",
                });
            })
            .addCase(postRegister.rejected, (state) => {
                state.loading = false;
                notification.error({
                    message: "Tài khoản này đã tồn tại!",
                });
            });
    },
});
const { reducer } = accountSlice;
export default reducer;
