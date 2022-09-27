import React from "react";

import { UseContext } from "./use-context-provider";

export const UseContextControllers = () => {
    const state: any = React.useContext(UseContext);
    const [openSearch, setOpenSearch] = state.isSearch;
    const [openMenu, setOpenMenu] = state.isMenu;
    const [videoClip, setVideoClip] = state.videoClip;
    const [dropdownMenu, setDropdownMenu] = state.dropdownMenu;
    const [resultAccountFavorite, setResultAccountFavorite] = state.resultAccountFavorite;

    return {
        openSearch,
        setOpenSearch,
        openMenu,
        setOpenMenu,
        dropdownMenu,
        setDropdownMenu,
        videoClip,
        setVideoClip,
        resultAccountFavorite,
        setResultAccountFavorite,
    };
};
