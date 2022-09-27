import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { getFavorite } from "./patch-api";
import { initialStateCommon } from "state";
import { CustomStateResponse } from "type";
import { postCreateFavorite } from "features";

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
        builder.addCase(postCreateFavorite.fulfilled, (state, action: any) => {
            const new_favorite = action.payload.account_favorite;
            const _id_music = action.payload.id_music;
            const dataOld = state.data;
            const index = dataOld.findIndex((item: any) => item._id === _id_music);
            if (index !== -1) {
                dataOld[index].account_favorite = new_favorite;
            }
        });
    },
});
const { reducer } = FavoriteHomeSlice;
export default reducer;
