import React from "react";
import { useAppDispatch, useAppSelector, UseAccount } from "hooks";

import {
    playlistStore,
    getPlaylist,
    onOpenPlaylist,
    getByIdPlaylist,
    addListMusic,
    createPlaylist,
    editPlaylistName,
    deleteMusicPlaylist,
    deletePlaylist,
} from "features";
import { ParamsUrl } from "type";

export const UsePlaylist = () => {
    const dispatch = useAppDispatch();
    const { accessToken } = UseAccount();
    const resultPlayList = useAppSelector(playlistStore);
    const { isOpen, error, dataByIdPlayList, loadingCreatePlaylist, id_playlist_old, loadingDeleteMusic } =
        resultPlayList;

    //api dispatch
    const getPlaylistAPI = React.useCallback(
        (params: ParamsUrl) => accessToken && dispatch(getPlaylist(params)),
        [accessToken, dispatch]
    );

    const getByIdPlaylistAPI = React.useCallback(
        (params: ParamsUrl) => accessToken && dispatch(getByIdPlaylist(params)),
        [dispatch, accessToken]
    );

    const handleOpenPlaylist = () => dispatch(onOpenPlaylist(!isOpen));

    const handleClosePlaylist = () => dispatch(onOpenPlaylist(!isOpen));

    const handleAddListMusic = React.useCallback(
        (data: ParamsUrl) => accessToken && dispatch(addListMusic(data)),
        [dispatch, accessToken]
    );

    const handleCreatePlaylist = React.useCallback(
        (params: ParamsUrl) => accessToken && dispatch(createPlaylist(params)),
        [dispatch, accessToken]
    );

    const handleEditPlaylistName = React.useCallback(
        (data: ParamsUrl) => accessToken && dispatch(editPlaylistName(data)),
        [accessToken, dispatch]
    );

    const handleDeleteMusicPlaylist = React.useCallback(
        (params: ParamsUrl) => accessToken && dispatch(deleteMusicPlaylist(params)),
        [dispatch, accessToken]
    );

    const handleDeletePlaylist = React.useCallback(
        (params: ParamsUrl) => accessToken && dispatch(deletePlaylist(params)),
        [dispatch, accessToken]
    );

    //UseEffect
    React.useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [isOpen]);

    return {
        resultPlayList,
        handleEditPlaylistName,
        getPlaylistAPI,
        handleOpenPlaylist,
        handleClosePlaylist,
        getByIdPlaylistAPI,
        handleAddListMusic,
        handleCreatePlaylist,
        handleDeletePlaylist,
        handleDeleteMusicPlaylist,
        dataByIdPlayList,
        loadingCreatePlaylist,
        loadingDeleteMusic,
        id_playlist_old,
        isOpen,
        error,
    };
};
