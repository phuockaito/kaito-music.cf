import axiosClient from "./axios-client";
import { StateResponse, ParamsUrl, Comment } from "type";

const commentAPI = {
    getComments: (params: ParamsUrl): Promise<StateResponse<Comment>> => {
        const url = "comment/get-by-id-music";
        return axiosClient.get(url, { params });
    },
    postComment: (data: { content: string; id_music: string; id_reply?: string }): Promise<StateResponse<Comment>> => {
        const url = "comment/create";
        return axiosClient.post(url, data);
    },
    deleteComment: (params: ParamsUrl): Promise<StateResponse<Comment>> => {
        const url = "comment/delete-by-id";
        return axiosClient.delete(url, { params });
    },
    updateComment: (data: any): Promise<StateResponse<Comment>> => {
        const url = "comment/update-comment-by-id";
        return axiosClient.delete(url, data);
    },
};
export default commentAPI;
