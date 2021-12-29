import { createAsyncThunk } from "@reduxjs/toolkit";

import newMusicAPI from "api/api-new-music";
import { ParamsUrl } from "type";

export const getNewMusic = createAsyncThunk("music/get-all", async (params: ParamsUrl) => {
    const response = await newMusicAPI.getNewMusic(params);
    return response;
});
