import { createAsyncThunk } from "@reduxjs/toolkit";

import trendingAPI from "api/api-trending";
import { ParamsUrl } from "type";

export const getTrending = createAsyncThunk("music/trending", async (params: ParamsUrl) => {
    const response = await trendingAPI.getTrending(params);
    return response;
});
