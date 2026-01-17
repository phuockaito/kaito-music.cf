import React from "react";
import { getSearch } from "features";
import { useAppDispatch, useAppSelector } from "hooks";
import { UseContextControllers } from "contexts";
import { searchStore } from "features";
import { ParamsUrl } from "type";

export const UseResultSearch = () => {
    const dispatch = useAppDispatch();
    //create state
    const typingTimeout = React.useRef<any>(0);
    const [search, setSearch] = React.useState<string>("");
    // store state
    const { setOpenSearch } = UseContextControllers();
    const resultSearch = useAppSelector(searchStore);
    const { error } = resultSearch;
    // dispatch api
    const fetchSearch = React.useCallback((params: ParamsUrl) => dispatch(getSearch(params)), [dispatch]);

    // function
    const openSearch = React.useCallback(() => setOpenSearch(true), [setOpenSearch]);
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    const clear = React.useCallback(() => {
        setSearch("");
        setOpenSearch(false);
    }, [setOpenSearch]);

    React.useEffect(() => {
        typingTimeout.current = setTimeout(() => {
            if (search.trim()) {
                openSearch();
                const params = { query: search.trim() };
                fetchSearch(params);
            }
        }, 500);
        return () => clearTimeout(typingTimeout.current);
    }, [search, error, openSearch, fetchSearch]);

    return {
        onChangeSearch,
        resultSearch,
        search,
        clear,
    };
};
