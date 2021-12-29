import axiosClient from "./axios-client";
import { PlaylistType, StateResponse, ParamsUrl, ByIdIdPlayListResponse, addListMusicResponse } from "type";

const playlistAPI = {
    getPlaylist(params: ParamsUrl): Promise<StateResponse<PlaylistType>> {
        const url = "list-music/get-list";
        return axiosClient.get(url, { params });
    },
    createPlaylist: (data: ParamsUrl): Promise<addListMusicResponse> => {
        const url = "list-music/create";
        return axiosClient.post(url, data);
    },
    getByIdPlaylist(params: ParamsUrl): Promise<ByIdIdPlayListResponse> {
        const url = `list-music/get-by-id?_id=${params._id}`;
        return axiosClient.get(url);
    },
    addListMusic(params: ParamsUrl): Promise<addListMusicResponse> {
        const url = "list-music/add-list-music";
        return axiosClient.put(url, params);
    },
    editPlaylistName(data: ParamsUrl): Promise<addListMusicResponse> {
        const url = "list-music/update-name-list-music";
        return axiosClient.put(url, data);
    },
    deleteListMusic(params: ParamsUrl): Promise<addListMusicResponse> {
        const url = "list-music/delete-list-music";
        return axiosClient.delete(url, { params });
    },
    deleteMusic(params: ParamsUrl): Promise<addListMusicResponse> {
        const url = "list-music/delete-music";
        return axiosClient.delete(url, { params });
    },
};

export default playlistAPI;
