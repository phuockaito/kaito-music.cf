import clsx from "clsx";

import { LoadingPlay, ItemInformation, Image, Duration, FavoriteIcon } from "layouts";
import { OtherDot } from "components";

import { UseMusic } from "hooks";
import { MusicType, ArrayMusicType } from "type";
import { AiOutlinePlayCircle } from "react-icons/ai";
import React from "react";
interface ItemListProps {
    timeFormat: string;
    nameMusic: string;
    nameSinger: string;
    image: string;
    _id: string;
    src_music: string;
    data: MusicType[] | ArrayMusicType[];
    index: number;
    activeClass?: string;
    otherDot?: boolean;
    childrenPros?: React.ReactNode;
    oneMusic?: boolean;
    item: MusicType;
    className?: string;
    link_mv?: string;
    isDeleteMusic?: boolean;
}

export const ItemList = ({
    timeFormat,
    link_mv,
    nameMusic,
    nameSinger,
    image,
    _id,
    src_music,
    index,
    data,
    activeClass = "bg-[#2f2f3a]",
    otherDot,
    childrenPros,
    oneMusic,
    item,
    className,
    isDeleteMusic,
}: ItemListProps) => {
    const { handleOnIndexMusic, _id_music, playing, handlePausePlayClick, handleOnChooseMusic, handleOnPlaylist } =
        UseMusic();
    const active: boolean = _id_music === _id && playing;

    const onClickPlay = React.useCallback(() => {
        const tempData = { index, data, _id };
        if (_id === _id_music) handlePausePlayClick();
        else if (oneMusic && item) handleOnChooseMusic(item);
        else if (!oneMusic && item) handleOnPlaylist({ ...tempData, music: item });
        else handleOnIndexMusic(tempData);
    }, [
        _id,
        _id_music,
        data,
        handleOnChooseMusic,
        handleOnIndexMusic,
        handleOnPlaylist,
        handlePausePlayClick,
        index,
        item,
        oneMusic,
    ]);
    return (
        <div
            className={clsx(
                "w-full group p-3 rounded-sm group",
                active ? activeClass : "hover:bg-[#2f2f3a]",
                className
            )}
        >
            <div className="flex space-x-4 items-center">
                <div className="w-12 h-12 flex relative cursor-pointer">
                    <Image
                        src={image}
                        imageClassName={clsx("h-full w-full", active ? "opacity-40" : "group-hover:opacity-40")}
                    >
                        {active ? (
                            <LoadingPlay
                                onClick={onClickPlay}
                                className="absolute transform-50-center"
                                style={{ left: "45%", top: "56%" }}
                            />
                        ) : (
                            <div className="absolute top-2/4 left-2/4 transform-50-center group-hover:opacity-100 opacity-0">
                                <AiOutlinePlayCircle className=" text-white" size="2em" onClick={onClickPlay} />
                            </div>
                        )}
                    </Image>
                </div>
                <ItemInformation nameMusic={nameMusic} nameSinger={nameSinger} className="truncate flex-1" />
                {childrenPros}
                <div className="space-x-4 flex items-center">
                    {otherDot && (
                        <>
                            <FavoriteIcon active={active} _id_music={_id} />
                            <OtherDot
                                isDeleteMusic={isDeleteMusic}
                                _id={_id}
                                nameMusic={nameMusic}
                                srcMusic={src_music}
                                link_mv={link_mv}
                                className={active ? "opacity-100" : "group-hover:opacity-100 opacity-0"}
                            />
                        </>
                    )}
                    <p className="rounded text-white py-1 px-2 text-xs">{timeFormat}</p>
                </div>
            </div>
        </div>
    );
};
