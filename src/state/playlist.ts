import { CustomPlayHistory, PaginationParams } from "type";

export const initialStatePlayList: CustomPlayHistory = {
    data: [],
    pagination: {} as PaginationParams,
    loading: true,
    isOpen: false,
    error: false,
    dataByIdPlayList: [],
    loadingByIdIdPlayList: false,
    loadingAddListMusic: false,
    loadingDeleteMusic: false,
    loadingCreatePlaylist: false,
    nameList: "",
    id_playlist: "",
    id_playlist_old: "",
    paginationByIdPlayList: {} as PaginationParams,
};
