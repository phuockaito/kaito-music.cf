import React from "react";

import { UseMusic, UsePlaylist } from "hooks";
import { MusicType, ArrayMusicType } from "type";

import { WrapperScroll, ItemList } from "layouts";
import { Heading5 } from "elements";

type WaitingListProps = ArrayMusicType & MusicType;

export const WaitingList = () => {
    const { dataByIdPlayList } = UsePlaylist();
    const { dataRandom } = UseMusic();
    const dataByIdPlayListLength = dataByIdPlayList.length;
    const dataRandomLength = dataRandom.length;

    const data = React.useMemo(
        () => (dataByIdPlayListLength ? dataByIdPlayList : dataRandom),
        [dataByIdPlayList, dataByIdPlayListLength, dataRandom, dataRandomLength]
    );

    return (
        <WrapperScroll className="grid-cols-1 grid h-full gap-y-2">
            {data.length ? (
                data.map((item: WaitingListProps, index: number) => (
                    <ItemList
                        key={index}
                        link_mv={item?.link_mv || item.music?.link_mv}
                        item={item}
                        className="h-[76px]"
                        nameMusic={item.name_music || item.music.name_music}
                        image={item.image_music || item.music.image_music}
                        nameSinger={item.name_singer || item.music.name_singer}
                        _id={dataByIdPlayList.length ? item.music._id : item._id}
                        src_music={item.src_music || item.music.src_music}
                        index={index}
                        timeFormat={item.time_format || item.music.time_format}
                        data={data}
                        activeClass="bg-[#ff3465]"
                        otherDot
                        isDeleteMusic={dataByIdPlayList.length ? true : false}
                    />
                ))
            ) : (
                <Heading5 title="Không có bài hát nào" className="text-white text-center" />
            )}
        </WrapperScroll>
    );
};
