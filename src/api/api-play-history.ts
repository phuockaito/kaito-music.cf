import axiosClient from "./axios-client";
import { PlayHistoryType, ParamsUrl, StateResponse, PlayHistoryResponse } from "type";
const PlayHistoryAPI = {
    postPlayHistory(data: ParamsUrl): Promise<PlayHistoryResponse> {
        return axiosClient.post("play-history/create", data);
    },
    getLayHistory(params: ParamsUrl): Promise<StateResponse<PlayHistoryType>> {
        return axiosClient.get("play-history/get-by-token", { params });
    },
};
export default PlayHistoryAPI;
