import React from "react";

import { UseMusic, UsePlaylist } from "hooks";
import { MusicType, ArrayMusicType } from "type";

import { WrapperScroll, ItemList } from "layouts";
import { Heading5 } from "elements";
import { UseContextControllers } from "contexts";

type WaitingListProps = ArrayMusicType & MusicType;

export const WaitingList = () => {
    const { resultAccountFavorite } = UseContextControllers();
    const { dataByIdPlayList } = UsePlaylist();
    const { dataRandom } = UseMusic();
    const dataByIdPlayListLength = dataByIdPlayList.length;
    const dataRandomLength = dataRandom.length;

    const [listData, setListData] = React.useState<WaitingListProps[]>([]);

    React.useEffect(() => {
        setListData(dataByIdPlayListLength ? dataByIdPlayList.map((i: any) => ({ ...i.music })) : dataRandom);
    }, [dataByIdPlayListLength, dataRandomLength]);

    const { message, id_music, account_favorite } = resultAccountFavorite;

    React.useEffect(() => {
        if (id_music) {
            const index = listData.findIndex((item) => item._id === id_music);
            if (index !== -1) {
                const newListData = [...listData];
                newListData[index] = account_favorite;
                setListData(newListData);
            }
        }
    }, [message]);

    return (
        <WrapperScroll className="grid h-full grid-cols-1 gap-y-2">
            {listData.length ? (
                listData.map((item: WaitingListProps, index: number) => (
                    <ItemList
                        account_favorite={item.account_favorite}
                        key={index}
                        link_mv={item?.link_mv}
                        item={item}
                        className="h-[76px]"
                        nameMusic={item.name_music}
                        image={item.image_music}
                        nameSinger={item.name_singer}
                        _id={item._id}
                        src_music={item.src_music}
                        index={index}
                        timeFormat={item.time_format}
                        data={listData}
                        activeClass="bg-[#0b0003]"
                        otherDot
                        isDeleteMusic={dataByIdPlayList.length ? true : false}
                    />
                ))
            ) : (
                <Heading5 title="Không có bài hát nào" className="text-center text-white" />
            )}
        </WrapperScroll>
    );
};
