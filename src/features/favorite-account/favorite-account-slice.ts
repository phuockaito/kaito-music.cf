import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { notification } from "antd";

import { FavoriteType, PaginationParams } from "type";
import { initialStateFavorite } from "state";

import { postLogout } from "features";
import { postCreateFavorite, getFavoriteAccount } from "./patch-api";

const favoriteAccountSlice = createSlice({
    name: "favoriteAccount",
    initialState: initialStateFavorite,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<FavoriteType>) => {
        builder
            .addCase(postCreateFavorite.pending, (state) => {
                state.loading = true;
            })
            .addCase(postCreateFavorite.fulfilled, (state, action: any) => {
                state.loading = false;
                notification.success({
                    message:
                        action.payload.message !== "Delete favorite success"
                            ? "Đã thêm vào danh sách yêu thích"
                            : "Đã xóa khỏi danh sách yêu thích",
                    placement: "topLeft",
                });
            })
            .addCase(postCreateFavorite.rejected, (state) => {
                state.loading = false;
                notification.error({
                    message: "Vui lòng thử lại sao!",
                    placement: "topLeft",
                });
            });
        // get favorite
        builder
            .addCase(getFavoriteAccount.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFavoriteAccount.fulfilled, (state, action) => {
                const { data, pagination } = action.payload;
                state.loading = false;
                state.data = data;
                state.pagination = pagination;
            })
            .addCase(getFavoriteAccount.rejected, (state) => {
                state.loading = false;
                notification.error({
                    message: "Vui lòng thử lại sao!",
                    placement: "topLeft",
                });
                state.error = true;
            });
        // logout
        builder.addCase(postLogout.fulfilled, (state) => {
            state.data = [];
            state.pagination = {} as PaginationParams;
        });
    },
});

const { reducer } = favoriteAccountSlice;
export default reducer;
