import clsx from "clsx";

import { LoadingPlay, ItemInformation, Image, FavoriteIcon } from "layouts";
import { OtherDot } from "components";

import { UseMusic } from "hooks";
import { MusicType, ArrayMusicType } from "type";
import { AiOutlinePlayCircle } from "react-icons/ai";
import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
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
    account_favorite: any;
    isDeleteMusic?: boolean;
    favorite?: number;
    view?: number;
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
    activeClass = "bg-[#9b4de0]",
    otherDot,
    childrenPros,
    oneMusic,
    item,
    className,
    isDeleteMusic,
    account_favorite,
    favorite,
    view,
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
        <LazyLoadComponent>
            <div
                className={clsx(
                    "w-full group p-3 rounded-sm group",
                    active ? activeClass : "hover:bg-[#2f2f3a]",
                    className
                )}
            >
                <div className="flex items-center">
                    <div className="flex relative mr-3 w-14 h-14 cursor-pointer">
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
                                <div className="absolute top-2/4 left-2/4 opacity-0 transform-50-center group-hover:opacity-100">
                                    <AiOutlinePlayCircle className="text-white" size="2em" onClick={onClickPlay} />
                                </div>
                            )}
                        </Image>
                    </div>
                    <ItemInformation
                        nameMusic={nameMusic}
                        nameSinger={nameSinger}
                        className="flex-1 truncate"
                        favorite={favorite}
                        view={view}
                        classNameView="flex gap-2 items-center"
                    />
                    {childrenPros}
                    <div className="flex gap-2 items-center">
                        {otherDot && (
                            <>
                                <FavoriteIcon active={active} _id_music={_id} account_favorite={account_favorite} />
                                <OtherDot
                                    isDeleteMusic={isDeleteMusic}
                                    _id={_id}
                                    nameMusic={nameMusic}
                                    srcMusic={src_music}
                                    link_mv={link_mv}
                                    className={active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                                />
                            </>
                        )}
                        <p className="mb-0 ml-2 text-xs text-white rounded">{timeFormat}</p>
                    </div>
                </div>
            </div>
        </LazyLoadComponent>
    );
};
