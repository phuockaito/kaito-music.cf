import { CustomStateResponse } from "type";
export interface UploadMusic {
    name_singer: string;
    image_music: string;
    name_music: string;
    category: string;
    src_music: string;
    view?: number;
    link_mv?: string;
    favorite?: number;
    _id?: string;
}
export interface uploadMusicType {
    objectUploadMusic?: UploadMusic;
    statusUploadMusic: string;
}

export interface isBooleanUploadMusic {
    loadingDeleteMusic: boolean;
    loadingUploadMusic: boolean;
}

export type customUploadMusicType = uploadMusicType & CustomStateResponse & isBooleanUploadMusic;
