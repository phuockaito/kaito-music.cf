import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { getLayHistory, postPlayHistory } from "./patch-api";
import { postLogout } from "features";

import { initialStatePlayList } from "state";
import { CustomPlayHistory, PlayHistoryType, PaginationParams } from "type";

const PlayHistorySlice = createSlice({
    name: "playHistory",
    initialState: initialStatePlayList,
    reducers: {
        onLogOutRemoveData: (state) => {
            state.data = [];
            state.pagination = {} as PaginationParams;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<CustomPlayHistory>) => {
        builder.addCase(postPlayHistory.fulfilled, (state, action) => {
            const { data } = action.payload;
            const index = state.data.findIndex((i: PlayHistoryType) => i._id === data.id_music);
            if (state.pagination._total) {
                if (index > -1) state.data.splice(index, 1);
                state.data.unshift(data.music);
            }
        });
        // get play history
        builder
            .addCase(getLayHistory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getLayHistory.fulfilled, (state, action) => {
                const { pagination, data } = action.payload;
                state.loading = false;
                state.pagination = pagination;
                data.forEach((i: PlayHistoryType) => {
                    state.data.push(i.music);
                });
            })
            .addCase(getLayHistory.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
        builder.addCase(postLogout.fulfilled, (state) => {
            state.data = [];
            state.pagination = {} as PaginationParams;
        });
    },
});
const { reducer, actions } = PlayHistorySlice;
export const { onLogOutRemoveData } = actions;
export default reducer;
