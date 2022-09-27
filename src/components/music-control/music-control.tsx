import React from "react";
import clsx from "clsx";

import { UseMusic } from "hooks";

import { TopControl } from "./top-control";
import { LeftControl } from "./left-control";
import { RightControl } from "./right-control";
import { CenterControl } from "./center-control";
import { RiPlayCircleLine } from "react-icons/ri";

import "./style.css";

export const MusicControl = () => {
    const { resultMusic, handleOnDropdownMusic, playing, dropdownMusic, _id_music } = UseMusic();
    const { data } = resultMusic;
    const tempData = React.useMemo(() => data, [data]);
    const { src_music, image_music, name_singer, link_mv, name_music, account_favorite } = tempData;

    return (
        <>
            {dropdownMusic && (
                <div className="fixed bottom-0 inline-block p-4 group_music_control__btn_play">
                    <RiPlayCircleLine
                        className="transition-ease-in-out text-white cursor-pointer transform hover:scale-125 bg-[#ff3465] rounded-sm"
                        size="2.5em"
                        onClick={() => handleOnDropdownMusic(false)}
                    />
                </div>
            )}
            {src_music && (
                <div
                    className={clsx(
                        "group_music_control w-full transition-ease-in-out z-30 overflow-hidden bg-[rgba(33,33,42,255)] text-center px-4 py-2",
                        dropdownMusic
                            ? "-bottom-full opacity-0 active-hidden fixed h-0"
                            : "sticky bottom-0 opacity-100 active-visible"
                    )}
                >
                    <TopControl SrcMusic={src_music} />
                    <div className="relative flex justify-center h-20 group_music_control__container">
                        <div className="flex items-center justify-between w-full space-x-4 group_music_control__play_music">
                            <LeftControl
                                playing={playing}
                                imageMusic={image_music}
                                nameSinger={name_singer}
                                nameMusic={name_music}
                            />
                            <CenterControl src_music={src_music} />
                            <RightControl
                                nameMusic={name_music}
                                srcMusic={src_music}
                                _id_music={_id_music}
                                link_mv={link_mv}
                                account_favorite={account_favorite}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
