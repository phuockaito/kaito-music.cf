import React from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { getTrending } from "features";
import { ParamsUrl } from "type";
import { trendingStore } from "features";

export const UesTrending = () => {
    const dispatch = useAppDispatch();
    const resultTrending = useAppSelector(trendingStore);
    const { error, data } = resultTrending;
    // api dispatch
    const getTrendingAPI = React.useCallback((params: ParamsUrl) => dispatch(getTrending(params)), [dispatch]);

    React.useEffect(() => {
        if (!data.length) getTrendingAPI({ _limit: 30 });
    }, [error]);

    return {
        resultTrending,
    };
};
