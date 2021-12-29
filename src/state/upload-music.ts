import { customUploadMusicType, PaginationParams, UploadMusic } from "type";

export const initialUploadMusic: customUploadMusicType = {
    data: [],
    pagination: {} as PaginationParams,
    objectUploadMusic: {} as UploadMusic,
    statusUploadMusic: "",
    loading: false,
    isOpen: false,
    error: false,
    loadingDeleteMusic: false,
    loadingUploadMusic: false,
};
