import React from "react";
import { UseContextApi } from "./use-context-api";
const UseContext = React.createContext(null);

const UseContextProvider = ({ children }: any) => {
    UseContextApi();
    // Create
    const [videoClip, setVideoClip] = React.useState({ isOpen: false, linkMv: "" });
    const [openSearch, setOpenSearch] = React.useState<boolean>(false);
    const [openMenu, setOpenMenu] = React.useState<boolean>(false);
    const [dropdownMenu, setDropdownMenu] = React.useState<boolean>(true);
    const [scrollHeader, setScrollHeader] = React.useState<boolean>(false);
    const [resultAccountFavorite, setResultAccountFavorite] = React.useState<any>({
        id_music: null,
        account_favorite: [],
        message: "",
    });
    const handleWindowSizeChange = () => window.screen.width >= 700 && setOpenSearch(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => window.removeEventListener("resize", handleWindowSizeChange);
    }, []);

    React.useEffect(() => {
        if (videoClip.isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [videoClip.isOpen]);

    const state: any = {
        isSearch: [openSearch, setOpenSearch],
        isMenu: [openMenu, setOpenMenu],
        scrollHeader: [scrollHeader, setScrollHeader],
        dropdownMenu: [dropdownMenu, setDropdownMenu],
        videoClip: [videoClip, setVideoClip],
        resultAccountFavorite: [resultAccountFavorite, setResultAccountFavorite],
    };

    return <UseContext.Provider value={state}>{children}</UseContext.Provider>;
};
export { UseContext, UseContextProvider };
