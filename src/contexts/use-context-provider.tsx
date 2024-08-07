import React from "react";
import { useAppSelector, UsePlayHistory, UseMusic } from "hooks";
import { musicStore } from "features";
import { MusicType } from "type";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import musicAPI from "api/api-music";

const UseContext = React.createContext(null);

const UseContextProvider = ({ children }: any) => {
    const { search } = useLocation();
    const query = queryString.parse(search);
    const { handleOnChooseMusic, handleOnAudio } = UseMusic();
    const { getMusicByIdAPI } = UseMusic();
    const { postPlayHistoryAPI } = UsePlayHistory();
    const resultMusic = useAppSelector(musicStore);
    const { _id_music } = resultMusic;
    // Create
    const [videoClip, setVideoClip] = React.useState({ isOpen: false, linkMv: "" });
    const [openSearch, setOpenSearch] = React.useState<boolean>(false);
    const [openMenu, setOpenMenu] = React.useState<boolean>(false);
    const [dropdownMenu, setDropdownMenu] = React.useState<boolean>(true);
    const [scrollHeader, setScrollHeader] = React.useState<boolean>(false);
    const [musicPlay, setMusicPlay] = React.useState<MusicType>();

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

    React.useEffect(() => {
        (async () => {
            if (_id_music) {
                postPlayHistoryAPI({ idMusic: _id_music });
                const result: any = await getMusicByIdAPI({ _id: _id_music });
                if (result) {
                    setMusicPlay(result.payload.data);
                }
            }
        })();
    }, [postPlayHistoryAPI, _id_music, getMusicByIdAPI]);

    React.useEffect(() => {
        (async () => {
            try {
                if (query?.query) {
                    const music = await musicAPI.getMusicName(query?.query as string);
                    setMusicPlay(music.data);
                    handleOnChooseMusic(music.data);
                    handleOnAudio(music.data.src_music);
                }
            } catch (_) { }
        })()
    }, []);


    const state: any = {
        isSearch: [openSearch, setOpenSearch],
        isMenu: [openMenu, setOpenMenu],
        scrollHeader: [scrollHeader, setScrollHeader],
        dropdownMenu: [dropdownMenu, setDropdownMenu],
        videoClip: [videoClip, setVideoClip],
        resultAccountFavorite: [resultAccountFavorite, setResultAccountFavorite],
        musicPlay: musicPlay,
    };

    return <UseContext.Provider value={state}>{children}</UseContext.Provider>;
};
export { UseContext, UseContextProvider };
