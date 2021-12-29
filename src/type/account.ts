import { isBoolean } from "type";
export interface Account {
    _id: string;
    user_name: string;
    email: string;
    image: string;
    role: number;
    sum_comment?: number;
    sum_list_music?: number;
    sum_upload?: number;
    password: string;
    updatedAt: string;
    createdAt: string;
}
export interface AccountResponse {
    data: Account;
    accessToken: string;
}
export interface LoginType {
    email: string;
    password: string;
}
export interface Register {
    userName: string;
}
export type RegisterType = LoginType & Register;
export interface loadingType {
    loadingGoogle?: boolean;
}
export type CustomAccount = AccountResponse & isBoolean & loadingType;
