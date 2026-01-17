import React from "react";

import { useAppDispatch, useAppSelector } from "hooks";
import { ParamsUrl } from "type";
import { getNewMusic, newMusicStore } from "features";
export const UserNewMusic = () => {
    const resultNewMusic = useAppSelector(newMusicStore);
    const { data, loading, error } = resultNewMusic;
    // api dispatch
    const dispatch = useAppDispatch();
    const getNewMusicApi = React.useCallback((params: ParamsUrl) => dispatch(getNewMusic(params)), [dispatch]);
    // useEffect
    React.useEffect(() => {
        if (!data.length) getNewMusicApi({ _limit: 20 });
    }, [error, data.length, getNewMusicApi]);

    return { data, loading };
};
