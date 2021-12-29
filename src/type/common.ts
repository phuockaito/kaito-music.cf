import { MusicType } from "type";
export interface ParamsUrl {
    _limit?: string | number;
    _page?: string | number;
    _id?: string;
    query?: string;
    _id_music?: string;
    [key: string]: any;
}

export interface PaginationParams {
    _limit: number;
    _page: number;
    _total: number;
}

export interface StateResponse<T> {
    data: T[];
    pagination: PaginationParams;
}

export interface Modal {
    type: any;
    _id?: string;
    open?: boolean;
    title?: string;
    others?: Record<string, any>;
}

export interface isBoolean {
    loading?: boolean;
    error?: boolean;
    isOpen?: boolean;
}

export type CustomStateResponse = StateResponse<MusicType> & isBoolean;
