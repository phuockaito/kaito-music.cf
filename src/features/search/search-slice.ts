import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { getSearch } from "./patch-api";

import { CustomStateResponse } from "type";
import { initialStateCommon } from "state";

const SearchSlice = createSlice({
    name: "search",
    initialState: initialStateCommon,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<CustomStateResponse>) => {
        builder
            .addCase(getSearch.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                const { data, pagination } = action.payload;
                state.data = data;
                state.pagination = pagination;
                state.loading = false;
            })
            .addCase(getSearch.rejected, (state) => {
                state.error = false;
            });
    },
});
const { reducer } = SearchSlice;
export default reducer;
