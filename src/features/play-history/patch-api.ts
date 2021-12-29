import { createAsyncThunk } from "@reduxjs/toolkit";

import PlayHistoryAPI from "api/api-play-history";
import { ParamsUrl } from "type";

export const postPlayHistory = createAsyncThunk("play-history/create", async (params: ParamsUrl) => {
    const response = await PlayHistoryAPI.postPlayHistory(params);
    return response;
});

export const getLayHistory = createAsyncThunk("play-history/get-by-token", async (params: ParamsUrl) => {
    const response = await PlayHistoryAPI.getLayHistory(params);
    return response;
});
