import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { message } from "antd";

import { initialStateCommon } from "state";
import { CustomComment } from "type";

import { onGetComments, onAddComment, onDeleteComment } from "./patch-api";

const commentSlice = createSlice({
    name: "comment",
    initialState: initialStateCommon,
    reducers: {
        onOpenComment: (state, action) => {
            state.isOpen = action.payload;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        builder
            .addCase(onGetComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(onGetComments.fulfilled, (state, action) => {
                const { data, pagination } = action.payload;
                state.isLoading = false;
                state.data = data;
                state.pagination = pagination;
            })
            .addCase(onGetComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = true;
            });
        // on Add Comment
        builder
            .addCase(onAddComment.pending, (state) => {
                state.loadingComments = true;
            })
            .addCase(onAddComment.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.loadingComments = false;
                state.data.unshift(data);
                state.pagination._total += 1;
                message.success("Đã đăng bình luận");
            })
            .addCase(onAddComment.rejected, (state) => {
                state.error = true;
            });
        // on Delete Comment
        builder.addCase(onDeleteComment.fulfilled, (state, action: any) => {
            const _id = action.payload.id;
            const index = state.data.findIndex((item: any) => item._id === _id);
            if (index !== -1) {
                state.data.splice(index, 1);
                message.success("Đã xóa bình luận");
                state.pagination._total -= 1;
            }
        });
    },
});

const { actions, reducer } = commentSlice;
export const { onOpenComment } = actions;
export default reducer;
