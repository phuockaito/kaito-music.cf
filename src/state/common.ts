import { CustomStateResponse, PaginationParams } from "type";

interface isBoolean {
    loadingComments?: boolean;
}

type CustomProps = CustomStateResponse & isBoolean;

export const initialStateCommon: CustomProps = {
    data: [],
    pagination: {} as PaginationParams,
    loading: false,
    isOpen: false,
    error: false,
    loadingComments: true,
};
