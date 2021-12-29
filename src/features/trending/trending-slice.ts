import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { getTrending } from "./patch-api";

import { CustomStateResponse } from "type";
import { initialStateCommon } from "state";

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
    },
});
const { reducer } = TrendingSlice;
export default reducer;
