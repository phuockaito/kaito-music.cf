import { createAsyncThunk } from "@reduxjs/toolkit";

import trendingAPI from "api/api-favorite";
import { ParamsUrl } from "type";

export const getFavorite = createAsyncThunk("music/favorite", async (params: ParamsUrl) => {
    const response = await trendingAPI.getFavorite(params);
    return response;
});
