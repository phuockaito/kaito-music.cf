import React from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import {
    musicStore,
    getMusicById,
    addIndexMusic,
    onNextPrevMusic,
    onRandomMusic,
    onPauseMusic,
    onAudio,
    onDropdownMusic,
    onChooseMusic,
    onPlaylist,
    addIdPlaylist,
} from "features";

import { ParamsUrl, IndexMusicType, MusicType, onPlaylistType } from "type";

export const UseMusic = () => {
    const resultMusic = useAppSelector(musicStore);
    //create store
    const { data, _id_music, index, playing, dropdownMusic, dataRandom, audio } = resultMusic;
    const { image_music, name_music, favorite, view } = data;
    // api dispatch
    const dispatch = useAppDispatch();
    const getMusicByIdAPI = React.useCallback(
        (params: ParamsUrl) => _id_music && dispatch(getMusicById(params)),
        [dispatch, _id_music]
    );
    const handleOnIndexMusic = (data: IndexMusicType) => dispatch(addIndexMusic(data));
    const handleOnNextPrevMusic = (index: number) => dispatch(onNextPrevMusic(index));
    const handleOnRandomMusic = () => dispatch(onRandomMusic());
    const handleOnPauseMusic = React.useCallback((playing: boolean) => dispatch(onPauseMusic(playing)), [dispatch]);
    const handleOnAudio = (audio: any) => dispatch(onAudio(audio));
    const handleOnDropdownMusic = (dropdown: boolean) => dispatch(onDropdownMusic(dropdown));
    const handleOnChooseMusic = (music: MusicType) => dispatch(onChooseMusic(music));
    const handleOnPlaylist = (data: onPlaylistType) => dispatch(onPlaylist(data));
    const handleAddIdPlaylist = (id_playList: string) => dispatch(addIdPlaylist(id_playList));
    // function
    const setTitleWebsite = React.useCallback(() => {
        if (_id_music) {
            const title = document.querySelector("title") as HTMLElement;
            const icons = document.querySelector("link[rel='icon']") as HTMLElement;
            icons.setAttribute("href", image_music);
            title.innerHTML = name_music;
            handleOnPauseMusic(true);
        }
    }, [_id_music, handleOnPauseMusic, image_music, name_music]);

    const handlePausePlayClick = React.useCallback(() => {
        if (playing) audio?.pause();
        else audio?.play();
        handleOnPauseMusic(!playing);
    }, [playing, audio, handleOnPauseMusic]);

    // useEffect
    React.useEffect(() => {
        setTitleWebsite();
    }, [_id_music, setTitleWebsite]);

    return {
        handlePausePlayClick,
        getMusicByIdAPI,
        handleOnIndexMusic,
        handleOnPauseMusic,
        handleOnNextPrevMusic,
        handleOnAudio,
        handleOnRandomMusic,
        handleOnDropdownMusic,
        handleOnChooseMusic,
        handleOnPlaylist,
        handleAddIdPlaylist,
        dropdownMusic,
        _id_music,
        playing,
        index,
        resultMusic,
        dataRandom,
        favorite,
        view,
    };
};
