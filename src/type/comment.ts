import { Account } from "type";

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
export interface updateCommentType {
    content: string;
    _id: string;
}

export interface createCommentType {
    content: string;
    id_music: string;
    id_reply?: string;
}

export interface ResponseUpdateDeleteCommentType {
    data: Comment;
    id: string;
}
