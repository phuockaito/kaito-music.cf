import axiosClient from "./axios-client";
import {
    StateResponse,
    ParamsUrl,
    Comment,
    updateCommentType,
    createCommentType,
    ResponseUpdateDeleteCommentType,
} from "type";

const commentAPI = {
    getComments: (params: ParamsUrl): Promise<StateResponse<Comment>> => {
        const url = "comment/get-by-id-music";
        return axiosClient.get(url, { params });
    },
    postComment: (data: createCommentType): Promise<StateResponse<Comment>> => {
        const url = "comment/create";
        return axiosClient.post(url, data);
    },
    deleteComment: (params: ParamsUrl): Promise<StateResponse<ResponseUpdateDeleteCommentType>> => {
        const url = "comment/delete-by-id";
        return axiosClient.delete(url, { params });
    },
    updateComment: (data: updateCommentType): Promise<StateResponse<ResponseUpdateDeleteCommentType>> => {
        const url = "comment/update-comment-by-id";
        return axiosClient.put(url, data);
    },
};
export default commentAPI;
