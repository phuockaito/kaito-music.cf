import { createSlice } from "@reduxjs/toolkit";
import { getNewMusic } from "./patch-api";
import { initialStateCommon } from "state";

const NewMusicSlice = createSlice({
    name: "newMusic",
    initialState: initialStateCommon,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNewMusic.pending, (state) => {
                state.loading = true;
            })
            .addCase(getNewMusic.fulfilled, (state, action) => {
                const { data, pagination } = action.payload;
                state.data = data;
                state.pagination = pagination;
                state.loading = false;
            })
            .addCase(getNewMusic.rejected, (state) => {
                state.error = true;
                state.loading = false;
            });
    },
});
const { reducer } = NewMusicSlice;
export default reducer;
