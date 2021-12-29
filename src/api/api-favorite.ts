import axiosClient from "./axios-client";

import { MusicType, StateResponse, ParamsUrl, PlayHistoryType, ArrayMusicType } from "type";

const favoriteAPI = {
    getFavorite(params: ParamsUrl): Promise<StateResponse<MusicType>> {
        const url = "music/favorite";
        return axiosClient.get(url, { params });
    },
    postCreate(data: ParamsUrl): Promise<PlayHistoryType> {
        const url = "favorite/create";
        return axiosClient.post(url, data);
    },
    getFavoriteAccount(params: ParamsUrl): Promise<StateResponse<ArrayMusicType>> {
        const url = "favorite/get-authorization-token";
        return axiosClient.get(url, { params });
    },
};
export default favoriteAPI;
