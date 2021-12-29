import { FavoriteType, PaginationParams } from "type";
export const initialStateFavorite: FavoriteType = {
    data: [],
    pagination: {} as PaginationParams,
    loading: true,
    isOpen: false,
    error: false,
};
