import axiosClient from "./axios-client";
import { MusicType, StateResponse, ParamsUrl } from "type";

const trendingAPI = {
    getTrending(params: ParamsUrl): Promise<StateResponse<MusicType>> {
        const url = "music/trending";
        return axiosClient.get(url, { params });
    },
};
export default trendingAPI;
