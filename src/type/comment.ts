import { MusicType, isBoolean, Account, StateResponse } from "type";

export interface Comment {
    _id: string;
    content: string;
    id_reply?: string;
    reply?: any[];
    id_music: string;
    music: any[];
    id_account: string;
    account: Account;
    edit_content: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export type CustomComment = StateResponse<Comment> & isBoolean;
