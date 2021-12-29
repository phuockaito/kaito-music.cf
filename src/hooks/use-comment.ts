import React from "react";
import { notification } from "antd";

import { UseAccount, useAppDispatch, useAppSelector, UseMusic } from "hooks";

import { onOpenComment, commentStore, onGetComments, onAddComment, onDeleteComment } from "features";
import { ParamsUrl } from "type";

export const UseComment = () => {
    const dispatch = useAppDispatch();
    const { _id_music } = UseMusic();
    const { accessToken } = UseAccount();

    const resultComment = useAppSelector(commentStore);
    const { isOpen, data, pagination, loadingComments } = resultComment;
    // api dispatch
    const handleOpenComment = () => dispatch(onOpenComment(!isOpen));
    const handleCloseComment = () => dispatch(onOpenComment(!isOpen));
    const handleGetComments = React.useCallback((params: ParamsUrl) => dispatch(onGetComments(params)), [dispatch]);

    const handleOnAddComment = React.useCallback(
        (data: any) => {
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

    //UseEffect
    React.useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [isOpen]);

    return {
        handleCloseComment,
        handleOpenComment,
        handleGetComments,
        handleOnAddComment,
        handleDeleteComment,
        isOpen,
        _id_music,
        accessToken,
        data,
        pagination,
        loadingComments,
    };
};
