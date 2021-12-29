import { createAsyncThunk } from "@reduxjs/toolkit";
import playlistAPI from "api/api-playlist";
import { ParamsUrl } from "type";

export const getPlaylist = createAsyncThunk("list-music/get-list", async (params: ParamsUrl) => {
    const response = await playlistAPI.getPlaylist(params);
    return response;
});

export const getByIdPlaylist = createAsyncThunk("list-music/get-by-id", async (params: ParamsUrl) => {
    const response = await playlistAPI.getByIdPlaylist(params);
    return response;
});

export const addListMusic = createAsyncThunk("list-music/add-music", async (data: ParamsUrl) => {
    const response = await playlistAPI.addListMusic(data);
    return response;
});

export const createPlaylist = createAsyncThunk("list-music/create", async (params: ParamsUrl) => {
    const response = await playlistAPI.createPlaylist(params);
    return response;
});

export const editPlaylistName = createAsyncThunk("list-music/update-name-list-music", async (data: ParamsUrl) => {
    const response = await playlistAPI.editPlaylistName(data);
    return response;
});

export const deletePlaylist = createAsyncThunk("list-music/delete-list-music", async (params: ParamsUrl) => {
    const response = await playlistAPI.deleteListMusic(params);
    return response;
});

export const deleteMusicPlaylist = createAsyncThunk("list-music/delete-music", async (params: ParamsUrl) => {
    const response = await playlistAPI.deleteMusic(params);
    return response;
});
