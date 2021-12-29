import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { getFavorite } from "./patch-api";
import { initialStateCommon } from "state";
import { CustomStateResponse } from "type";

const FavoriteHomeSlice = createSlice({
    name: "favoriteHome",
    initialState: initialStateCommon,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<CustomStateResponse>) => {
        builder
            .addCase(getFavorite.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFavorite.fulfilled, (state, action) => {
                const { data, pagination } = action.payload;
                state.data = data;
                state.pagination = pagination;
                state.loading = false;
            })
            .addCase(getFavorite.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    },
});
const { reducer } = FavoriteHomeSlice;
export default reducer;
