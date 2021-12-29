import { createAsyncThunk } from "@reduxjs/toolkit";

import favoriteAPI from "api/api-favorite";
import { ParamsUrl } from "type";

export const postCreateFavorite = createAsyncThunk("create/create", async (data: ParamsUrl) => {
    const response = await favoriteAPI.postCreate(data);
    return response;
});

export const getFavoriteAccount = createAsyncThunk("favorite/get-authorization-token", async (params: ParamsUrl) => {
    const response = await favoriteAPI.getFavoriteAccount(params);
    return response;
});
