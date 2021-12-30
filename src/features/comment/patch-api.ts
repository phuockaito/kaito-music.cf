import { createAsyncThunk } from "@reduxjs/toolkit";

import commentAPI from "api/api-comment";
import { ParamsUrl, updateCommentType, createCommentType } from "type";

export const onGetComments = createAsyncThunk("get-by-id-music", async (params: ParamsUrl) => {
    const response = await commentAPI.getComments(params);
    return response;
});

export const onAddComment = createAsyncThunk("add-comment", async (data: createCommentType) => {
    const response = await commentAPI.postComment(data);
    return response;
});

export const onDeleteComment = createAsyncThunk("delete-comment", async (params: ParamsUrl) => {
    const response = await commentAPI.deleteComment(params);
    return response;
});

export const onUpdateComment = createAsyncThunk("update-comment", async (data: updateCommentType) => {
    const response = await commentAPI.updateComment(data);
    return response;
});
