import axiosClient from "./axios-client";

import { MusicType, StateResponse, ParamsUrl, UploadMusic } from "type";

const uploadMusicApi = {
    getUploadMusic(params: ParamsUrl): Promise<StateResponse<MusicType>> {
        const url = "music/get-upload";
        return axiosClient.get(url, { params });
    },
    postUploadMusic(data: UploadMusic): Promise<MusicType> {
        const url = "music/create";
        return axiosClient.post(url, data);
    },
    editUploadMusic(data: UploadMusic): Promise<MusicType> {
        const url = "music/edit";
        return axiosClient.put(url, data);
    },
    deleteMusic(params: ParamsUrl): Promise<string> {
        const url = "music/delete-by-id";
        return axiosClient.delete(url, { params });
    },
};

export default uploadMusicApi;
