import React from "react";

import { useAppSelector, UsePlayHistory, UseMusic } from "hooks";
import { musicStore } from "features";

export const UseContextApi = () => {
    const resultMusic = useAppSelector(musicStore);
    const { _id_music } = resultMusic;

    const { getMusicByIdAPI } = UseMusic();

    const { postPlayHistoryAPI } = UsePlayHistory();
    React.useEffect(() => {
        postPlayHistoryAPI({ idMusic: _id_music });
        getMusicByIdAPI({ _id: _id_music });
    }, [postPlayHistoryAPI, _id_music, getMusicByIdAPI]);
};
