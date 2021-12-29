import React from "react";

import { useAppDispatch, useAppSelector, UseAccount, UseMusic } from "hooks";
import { postPlayHistory, playHistoryStore, getLayHistory } from "features";
import { ParamsUrl } from "type";

export const UsePlayHistory = () => {
    const dispatch = useAppDispatch();
    const resultHistory = useAppSelector(playHistoryStore);

    const { accessToken } = UseAccount();
    const { _id_music } = UseMusic();

    const { error, loading, data, pagination } = resultHistory;

    const postPlayHistoryAPI = React.useCallback(
        (params: ParamsUrl) => _id_music && accessToken && dispatch(postPlayHistory(params)),
        [dispatch, accessToken, _id_music]
    );

    const HandelGetLayHistoryAPI = React.useCallback(
        (params: ParamsUrl) => accessToken && dispatch(getLayHistory(params)),
        [accessToken, dispatch]
    );

    return {
        postPlayHistoryAPI,
        HandelGetLayHistoryAPI,
        loading,
        accessToken,
        error,
        data,
        _id_music,
        pagination,
    };
};
