import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";

import {
    getPlaylist,
    getByIdPlaylist,
    addListMusic,
    createPlaylist,
    editPlaylistName,
    deletePlaylist,
    deleteMusicPlaylist,
} from "./patch-api";

import { CustomPlayHistory } from "type";
import { initialStatePlayList } from "state";
import { notification } from "antd";

const PlaylistSlice = createSlice({
    name: "playlist",
    initialState: initialStatePlayList,
    reducers: {
        onOpenPlaylist: (state, action) => {
            state.isOpen = action.payload;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<CustomPlayHistory>) => {
        // get play list
        builder
            .addCase(getPlaylist.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPlaylist.fulfilled, (state, action) => {
                const { data, pagination } = action.payload;
                state.loading = false;
                state.data = data;
                state.pagination = pagination;
            })
            .addCase(getPlaylist.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
        // get by id play list
        builder
            .addCase(getByIdPlaylist.pending, (state, action) => {
                const { meta } = action;
                state.loadingAddListMusic = true;
                state.id_playlist = meta.arg._id;
                state.nameList = meta.arg.nameList;
            })
            .addCase(getByIdPlaylist.fulfilled, (state, action) => {
                const { data, pagination } = action.payload;
                state.loadingAddListMusic = false;
                state.dataByIdPlayList = data.array_music;
                state.paginationByIdPlayList = pagination;
                state.isOpen = true;
                state.id_playlist_old = data._id;
                notification.success({
                    message: `Danh sách “${state.nameList}” đã sẳn sằng`,
                    placement: "topLeft",
                });
            })
            .addCase(getByIdPlaylist.rejected, (state) => {
                state.loadingAddListMusic = false;
                state.error = true;
            });
        // add List Music
        builder
            .addCase(addListMusic.pending, (state, action) => {
                const { meta } = action;
                state.loadingAddListMusic = true;
                state.id_playlist = meta.arg._id;
                state.nameList = meta.arg.nameList;
            })
            .addCase(addListMusic.fulfilled, (state, action) => {
                const { data } = action.payload;
                if (state.id_playlist_old === data.id_list) {
                    const index = state.dataByIdPlayList.findIndex((item: any) => item.id_music === data.id_music);
                    if (index === -1) state.dataByIdPlayList.unshift(data);
                    else {
                        state.dataByIdPlayList.splice(index, 1);
                        state.dataByIdPlayList.unshift(data);
                    }
                }
                state.loadingAddListMusic = false;
                notification.success({
                    message: `Đã thêm bài hát “${data.music.name_music}” vào “${state.nameList}” thành công`,
                    placement: "topLeft",
                });
            })
            .addCase(addListMusic.rejected, (state) => {
                state.loadingAddListMusic = false;
                notification.error({
                    message: "Thêm vào playlist thất bại!",
                    placement: "topLeft",
                });
            });
        // create playlist
        builder
            .addCase(createPlaylist.pending, (state) => {
                state.loadingCreatePlaylist = true;
            })
            .addCase(createPlaylist.fulfilled, (state, action) => {
                state.loadingCreatePlaylist = false;
                const { data } = action.payload;
                state.data.unshift(data);
                notification.success({
                    message: `Playlist “${data.name_list}” tạo mới thành công`,
                    placement: "topLeft",
                });
            })
            .addCase(createPlaylist.rejected, (state) => {
                state.loadingCreatePlaylist = false;
                notification.error({
                    message: "Playlist tạo mới thất bại!",
                    placement: "topLeft",
                });
            });
        // edit playlist name
        builder
            .addCase(editPlaylistName.pending, (state) => {
                state.loadingCreatePlaylist = true;
            })
            .addCase(editPlaylistName.fulfilled, (state, action) => {
                const { data } = action.payload;
                const index = state.data.findIndex((item: any) => item._id === data._id);
                if (index !== -1) state.data[index] = data;
                state.loadingCreatePlaylist = false;
                notification.success({
                    message: `Playlist “${data.name_list}” đổi thành công`,
                    placement: "topLeft",
                });
            })
            .addCase(editPlaylistName.rejected, (state) => {
                state.loadingCreatePlaylist = false;
                notification.success({
                    message: "Đổi tên không thành công",
                    placement: "topLeft",
                });
            });
        // delete music
        builder
            .addCase(deleteMusicPlaylist.pending, (state) => {
                state.loadingDeleteMusic = true;
            })
            .addCase(deleteMusicPlaylist.fulfilled, (state, action) => {
                const { data } = action.payload;
                const index = state.dataByIdPlayList.findIndex((item: any) => item.id_music === data.id_music);
                if (index !== -1) state.dataByIdPlayList.splice(index, 1);
                state.loadingDeleteMusic = false;
                notification.success({
                    message: `Đã xóa bài hát “${data.music.name_music}” khỏi “${state.nameList}” thành công`,
                    placement: "topLeft",
                });
            })
            .addCase(deleteMusicPlaylist.rejected, (state) => {
                state.loadingDeleteMusic = false;
                notification.success({
                    message: "Xóa không thành công",
                    placement: "topLeft",
                });
            });
        // delete playlist
        builder
            .addCase(deletePlaylist.pending, (state, action) => {
                const { meta } = action;
                state.id_playlist = meta.arg._id;
                state.loadingAddListMusic = true;
            })
            .addCase(deletePlaylist.fulfilled, (state, action) => {
                const { data } = action.payload;
                const index = state.data.findIndex((item: any) => item._id === data._id);
                if (index !== -1) state.data.splice(index, 1);
                notification.success({
                    message: `Playlist “${data.name_list}” xóa thành công`,
                    placement: "topLeft",
                });
            })
            .addCase(deletePlaylist.rejected, (state) => {
                state.loadingAddListMusic = false;
                notification.error({
                    message: "Xóa playlist thất bại!",
                    placement: "topLeft",
                });
            });
    },
});

const { actions, reducer } = PlaylistSlice;
export const { onOpenPlaylist } = actions;
export default reducer;
