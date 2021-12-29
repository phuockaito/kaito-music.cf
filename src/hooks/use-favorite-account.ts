import React from "react";
import { useAppDispatch, useAppSelector, UseAccount } from "hooks";
import { postCreateFavorite, getFavoriteAccount, favoriteAccountStore } from "features";

import { ParamsUrl } from "type";
export const UseFavoriteAccount = () => {
    const favoriteAccount = useAppSelector(favoriteAccountStore);
    const { error, loading, data } = favoriteAccount;
    const { accessToken } = UseAccount();
    const dispatch = useAppDispatch();
    // api dispatch
    const handleCreateFavorite = React.useCallback(
        (data: ParamsUrl) => accessToken && dispatch(postCreateFavorite(data)),
        [accessToken, dispatch]
    );
    const handleGetFavoriteAccount = React.useCallback(
        (params: ParamsUrl) => accessToken && dispatch(getFavoriteAccount(params)),
        [dispatch, accessToken]
    );
    return {
        handleCreateFavorite,
        handleGetFavoriteAccount,
        data,
        error,
        loading,
        accessToken,
    };
};
