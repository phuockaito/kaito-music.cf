import { createAsyncThunk } from "@reduxjs/toolkit";

import searchAPI from "api/api-search";
import { ParamsUrl } from "type";

export const getSearch = createAsyncThunk("/search?query", async (params: ParamsUrl) => {
    const response = await searchAPI.getSearch(params);
    return response;
});
