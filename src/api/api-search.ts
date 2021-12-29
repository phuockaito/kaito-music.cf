import axiosClient from "./axios-client";
import { MusicType, StateResponse, ParamsUrl } from "type";

const searchAPI = {
    getSearch(params: ParamsUrl): Promise<StateResponse<MusicType>> {
        const url = "search";
        return axiosClient.get(url, { params });
    },
};
export default searchAPI;
