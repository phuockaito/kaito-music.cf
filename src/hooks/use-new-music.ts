import React from "react";

import { useAppDispatch, useAppSelector } from "hooks";
import { ParamsUrl } from "type";
import { getNewMusic, newMusicStore } from "features";
export const UserNewMusic = () => {
    const resultNewMusic = useAppSelector(newMusicStore);
    const { data, loading, error } = resultNewMusic;
    // api dispatch
    const dispatch = useAppDispatch();
    const getNewMusicApi = (params: ParamsUrl) => dispatch(getNewMusic(params));
    // useEffect
    React.useEffect(() => {
        if (!data.length) getNewMusicApi({ _limit: 16 });
    }, [error]);

    return { data, loading };
};
