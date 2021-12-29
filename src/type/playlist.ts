import { MusicType, PaginationParams, isBoolean } from "type";

export interface PlaylistType {
    image_list: string;
    id_account: string;
    name_list: string;
    array_music?: MusicType;
    createdAt?: Date;
    updatedAt?: Date;
    _id: string;
}
export interface PlayHistoryType {
    id_music: string;
    id_account: string;
    music: MusicType;
    createdAt: Date;
    updatedAt: Date;
    array_music?: ArrayMusicType[];
    _id: string;
}
export interface ArrayMusicType {
    _id: string;
    id_account: string;
    id_music: string;
    music: MusicType;
    id_list: string;
    createdAt: Date;
    updatedAt: Date;
    name_list: string;
    image_list: string;
}
export interface PlayHistoryResponse {
    data: PlayHistoryType | any;
    pagination: PaginationParams;
}

export interface addListMusicResponse {
    data: ArrayMusicType;
}

export interface ByIdIdPlayListResponse {
    data: PlayHistoryType;
    pagination: PaginationParams;
}
export interface ByIdIdPlayListType {
    loadingByIdIdPlayList?: boolean;
    dataByIdPlayList: PlayHistoryType | any;
    paginationByIdPlayList: PaginationParams;
}
export interface addListMusicType {
    loadingAddListMusic?: boolean;
    loadingCreatePlaylist?: boolean;
    loadingDeleteMusic?: boolean;
    id_playlist?: string;
    id_playlist_old?: string;
    nameList?: string;
}
export type CustomPlayHistory = PlayHistoryResponse & isBoolean & ByIdIdPlayListType & addListMusicType;
