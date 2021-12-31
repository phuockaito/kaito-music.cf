import React from "react";
import { notification } from "antd";

import { UseAccount, useAppDispatch, useAppSelector, UseMusic } from "hooks";

import {
    onOpenComment,
    commentStore,
    onGetComments,
    onAddComment,
    onDeleteComment,
    onUpdateComment,
    onRemoveDataCommentOld,
} from "features";
import { ParamsUrl, updateCommentType, createCommentType } from "type";

export const UseComment = () => {
    const dispatch = useAppDispatch();
    const { _id_music } = UseMusic();
    const { accessToken } = UseAccount();

    const resultComment = useAppSelector(commentStore);
    const { isOpen, data, pagination, loadingComments } = resultComment;

    const [editComment, setEditComment] = React.useState<any>();

    // api dispatch
    const handleOpenComment = () => dispatch(onOpenComment(!isOpen));
    const handleCloseComment = () => dispatch(onOpenComment(!isOpen));
    const handleGetComments = React.useCallback((params: ParamsUrl) => dispatch(onGetComments(params)), [dispatch]);
    const handleRemoveDataCommentOld = React.useCallback(() => dispatch(onRemoveDataCommentOld()), [dispatch]);

    const handleOnAddComment = React.useCallback(
        (data: createCommentType) => {
            if (accessToken) {
                dispatch(onAddComment(data));
            } else {
                notification.error({
                    message: "Thông báo",
                    description: "Bạn phải đăng nhập để bình luận",
                });
            }
        },
        [accessToken, dispatch]
    );

    const handleDeleteComment = React.useCallback(
        (params: ParamsUrl) => accessToken && dispatch(onDeleteComment(params)),
        [dispatch, accessToken]
    );

    const handleUpdateComment = React.useCallback(
        (data: updateCommentType) => accessToken && dispatch(onUpdateComment(data)),
        [dispatch, accessToken]
    );

    //UseEffect
    React.useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [isOpen]);

    return {
        handleRemoveDataCommentOld,
        handleCloseComment,
        handleOpenComment,
        handleGetComments,
        handleOnAddComment,
        handleDeleteComment,
        handleUpdateComment,
        setEditComment,
        editComment,
        isOpen,
        _id_music,
        accessToken,
        data,
        pagination,
        loadingComments,
    };
};
