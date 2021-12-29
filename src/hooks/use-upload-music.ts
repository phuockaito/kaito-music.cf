import React from "react";

import { useAppDispatch, useAppSelector, UseAccount, UseModal } from "hooks";
import { getUploadMusic, uploadMusicStore, postUploadMusic, deleteMusic, editUploadMusic } from "features";

import { ParamsUrl } from "type";
import { message, notification } from "antd";

import { ModalTypeEnum } from "const";
export const UseUploadMusic = () => {
    const dispatch = useAppDispatch();
    // create state
    const [newImage, setNewImage] = React.useState<boolean>(false);
    const [newAudio, setNewAudio] = React.useState<boolean>(false);
    // store
    const resultUploadMusic = useAppSelector(uploadMusicStore);
    const { accessToken } = UseAccount();
    const { resultModal, toggle } = UseModal();

    const { others } = resultModal;
    const { data, loading, error, pagination, statusUploadMusic, loadingUploadMusic } = resultUploadMusic;
    // dispatch api
    const handleGetUploadMusic = React.useCallback(
        (params: ParamsUrl) => accessToken && dispatch(getUploadMusic(params)),
        [dispatch, accessToken]
    );

    const handlePostSourceMusic = React.useCallback(
        (data: any) => accessToken && dispatch(postUploadMusic(data)),
        [dispatch, accessToken]
    );

    const handleEditMusicUpload = React.useCallback(
        (data: any) => accessToken && dispatch(editUploadMusic(data)),
        [dispatch, accessToken]
    );

    const handleDeleteMusic = React.useCallback(
        (params: ParamsUrl) => accessToken && dispatch(deleteMusic(params)),
        [dispatch, accessToken]
    );

    const handleUploadMusicImage = (f: any) => {
        const { file, fileList } = f;
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg";
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJpgOrPng) message.error("Bạn chỉ có thể tải lên tệp JPG / PNG / JPEG!");
        if (!isLt2M) message.error("Hình ảnh phải nhỏ hơn 2MB !");
        if (!fileList.length) setNewImage(false);
        if (fileList.length) setNewImage(true);
        if (isJpgOrPng && isLt2M) return f && fileList;
    };

    const handleUploadMusicSource = (f: any) => {
        const { file, fileList } = f;
        const isTypeMusic = file.type === "audio/mpeg";
        if (!isTypeMusic) message.error("Bạn chỉ có thể tải lên tệp MP3!");
        if (!fileList.length) setNewAudio(false);
        if (fileList.length) setNewAudio(true);
        if (isTypeMusic) return f && fileList;
    };

    const handlePostUploadMusic = async (value: any) => {
        if (value) {
            const formData = new FormData();
            const { category, image_music, link_mv, name_music, name_singer, src_music } = value;
            const data = { category, link_mv, name_music, name_singer, _id: others?._id };
            formData.append("image_music", image_music ? image_music[0].originFileObj : others?.image_music);
            formData.append("src_music", src_music ? src_music[0].originFileObj : others?.src_music);
            formData.append("upload", JSON.stringify(data));
            const youtube = link_mv.split("/");
            if (youtube.length === 4) {
                if (others) {
                    const result = await handleEditMusicUpload(formData);
                    if (result) toggle({ type: ModalTypeEnum.NULL, title: "" });
                } else handlePostSourceMusic(formData);
            } else
                notification["error"]({
                    message: "Thông Báo",
                    description: "Link MV không hợp lệ!",
                });
        }
    };

    return {
        handleGetUploadMusic,
        handleUploadMusicImage,
        handleUploadMusicSource,
        handlePostUploadMusic,
        handleDeleteMusic,
        others,
        statusUploadMusic,
        data,
        pagination,
        error,
        loading,
        loadingUploadMusic,
        newImage,
        newAudio,
    };
};
