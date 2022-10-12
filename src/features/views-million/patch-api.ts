import { createAsyncThunk } from "@reduxjs/toolkit";

import newMusicAPI from "api/api-new-music";
import { ParamsUrl } from "type";

export const getTopViewsMillion = createAsyncThunk("music/get-top-views-million", async (params: ParamsUrl) => {
    const response = await newMusicAPI.getTopViewsMusic(params);
    return response;
});
export const getTopViewsBillion = createAsyncThunk("music/get-top-views-billion", async (params: ParamsUrl) => {
    const response = await newMusicAPI.getTopViewsMusic(params);
    return response;
});
