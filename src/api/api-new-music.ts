import axiosClient from "./axios-client";
import { MusicType, StateResponse, ParamsUrl } from "type";

const newMusicAPI = {
    getNewMusic(params: ParamsUrl): Promise<StateResponse<MusicType>> {
        const url = "music/get-all";
        return axiosClient.get(url, { params });
    },
};
export default newMusicAPI;
