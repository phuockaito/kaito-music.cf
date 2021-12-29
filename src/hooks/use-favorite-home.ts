import React from "react";

import { useAppDispatch, useAppSelector } from "hooks";
import { getFavorite } from "features";
import { ParamsUrl } from "type";
import { favoriteHomeStore } from "features";

export const UesFavorite = () => {
    const dispatch = useAppDispatch();
    const resultFavorite = useAppSelector(favoriteHomeStore);
    const { error, data } = resultFavorite;
    // api dispatch
    const getFavoriteAPI = React.useCallback((params: ParamsUrl) => dispatch(getFavorite(params)), [dispatch]);

    React.useEffect(() => {
        if (!data.length) getFavoriteAPI({ _limit: 30 });
    }, [error]);

    return {
        resultFavorite,
    };
};
