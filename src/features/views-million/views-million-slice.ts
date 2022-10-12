import { createSlice } from "@reduxjs/toolkit";
import { getTopViewsMillion, getTopViewsBillion } from "./patch-api";
import { MusicType } from "type";

const initialState = {
    dataMillion: [] as MusicType[],
    loadingMillion: false,
    errorMillion: false,
    // Billion
    dataBillion: [] as MusicType[],
    loadingBillion: false,
    errorBillion: false,
};
const TopViewsSlice = createSlice({
    name: "TopViews",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTopViewsMillion.pending, (state) => {
                state.loadingMillion = true;
            })
            .addCase(getTopViewsMillion.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.dataMillion = data;
                state.loadingMillion = false;
            })
            .addCase(getTopViewsMillion.rejected, (state) => {
                state.errorMillion = true;
                state.loadingMillion = false;
            });
        // Billion
        builder
            .addCase(getTopViewsBillion.pending, (state) => {
                state.loadingBillion = true;
            })
            .addCase(getTopViewsBillion.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.dataBillion = data;
                state.loadingBillion = false;
            })
            .addCase(getTopViewsBillion.rejected, (state) => {
                state.errorBillion = true;
                state.loadingBillion = false;
            });
    },
});
const { reducer } = TopViewsSlice;
export default reducer;
