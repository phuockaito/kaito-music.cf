import axiosClient from "./axios-client";
import { MusicType, ParamsUrl } from "type";

const musicAPI = {
    getMusic(params: ParamsUrl): Promise<MusicType> {
        const url = "music/get-by-id";
        return axiosClient.get(url, { params });
    },
};
export default musicAPI;
