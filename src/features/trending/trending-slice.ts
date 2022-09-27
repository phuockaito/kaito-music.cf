import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { getTrending } from "./patch-api";

import { CustomStateResponse } from "type";
import { initialStateCommon } from "state";
import { postCreateFavorite } from "features";

const TrendingSlice = createSlice({
    name: "Trending",
    initialState: initialStateCommon,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<CustomStateResponse>) => {
        builder
            .addCase(getTrending.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTrending.fulfilled, (state, action) => {
                const { data, pagination } = action.payload;
                state.data = data;
                state.pagination = pagination;
                state.loading = false;
            })
            .addCase(getTrending.rejected, (state) => {
                state.error = true;
                state.loading = false;
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
const { reducer } = TrendingSlice;
export default reducer;
