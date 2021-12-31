import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { message } from "antd";

import { initialStateCommon } from "state";

import { Comment } from "type";

import { onGetComments, onAddComment, onDeleteComment, onUpdateComment } from "./patch-api";

const commentSlice = createSlice({
    name: "comment",
    initialState: initialStateCommon,
    reducers: {
        onOpenComment: (state, action) => {
            state.isOpen = action.payload;
        },
        onRemoveDataCommentOld: (state) => {
            state.data = [];
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
                state.data.push(...data);
                state.pagination = pagination;
            })
            .addCase(onGetComments.rejected, (state) => {
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
            const index = state.data.findIndex((item: Comment) => item._id === _id);
            if (index !== -1) {
                state.data.splice(index, 1);
                message.success("Đã xóa bình luận");
                state.pagination._total -= 1;
            }
        });
        // on Update Comment
        builder
            .addCase(onUpdateComment.pending, (state) => {
                state.loadingComments = true;
            })
            .addCase(onUpdateComment.fulfilled, (state, action: any) => {
                state.loadingComments = false;
                const { data, id } = action.payload;
                const index = state.data.findIndex((item: Comment) => item._id === id);
                if (index !== -1) {
                    state.data[index] = data;
                    message.success("Đã cập nhật bình luận");
                }
            })
            .addCase(onUpdateComment.rejected, () => {
                message.error("Có lỗi xảy ra");
            });
    },
});

const { actions, reducer } = commentSlice;
export const { onOpenComment, onRemoveDataCommentOld } = actions;
export default reducer;
