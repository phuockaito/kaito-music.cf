import { createAsyncThunk } from "@reduxjs/toolkit";

import musicAPI from "api/api-music";
import { ParamsUrl } from "type";

export const getMusicById = createAsyncThunk("music/get-by-id", async (params: ParamsUrl) => {
    const response = await musicAPI.getMusic(params);
    return response;
});
