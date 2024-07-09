import axiosClient from "./axios-client";
import { MusicType, ParamsUrl } from "type";

const musicAPI = {
    getMusic(params: ParamsUrl): Promise<MusicType> {
        const url = "music/get-by-id";
        return axiosClient.get(url, { params });
    },
    getMusicName(name: string): Promise<{ data: MusicType }> {
        const url = `music/get-music-name?_name=${name}`;
        return axiosClient.get(url);
    },
};
export default musicAPI;
