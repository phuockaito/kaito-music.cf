import React from "react";
import clsx from "clsx";

import { WrapperScroll, ItemList, NeedLogin, ListLoading } from "layouts";

import { MusicType } from "type";
import { FcGoogle } from "react-icons/fc";
import { UsePlayHistory } from "hooks";
import { UseContextControllers } from "contexts";
interface ListenedRecentlyProps {
    className?: string;
    children?: React.ReactNode;
}
export const ListenedRecently = ({ className, children }: ListenedRecentlyProps) => {
    const { HandelGetLayHistoryAPI, data, loading, accessToken, error } = UsePlayHistory();
    const [listData, setListData] = React.useState<MusicType[]>([]);
    const { resultAccountFavorite } = UseContextControllers();

    React.useEffect(() => {
        if (!data.length) HandelGetLayHistoryAPI({ _limit: 20 });
    }, [HandelGetLayHistoryAPI, error]);

    React.useEffect(() => {
        if (data.length) setListData(data);
    }, [data]);

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

    return !accessToken ? (
        <div className="p-4 rounded-lg bg-[#01aaed] text-center mt-4">
            <NeedLogin
                isContent
                login
                className="p-2"
                icon={<FcGoogle size="1.3em" />}
                title="Đăng nhập"
                titleClassName="text-white text-center"
            />
        </div>
    ) : loading ? (
        <ListLoading items={36} />
    ) : (
        <WrapperScroll className={clsx("grid h-full", className)}>
            {listData.map((item: MusicType, index: number) => (
                <ItemList
                    account_favorite={item.account_favorite}
                    key={item._id}
                    timeFormat={item.time_format}
                    link_mv={item.link_mv}
                    oneMusic
                    otherDot
                    data={listData}
                    nameMusic={item.name_music}
                    image={item.image_music}
                    nameSinger={item.name_singer}
                    _id={item._id}
                    src_music={item.src_music}
                    index={index}
                    activeClass="bg-[#0b0003]"
                    item={item}
                />
            ))}
            {children}
        </WrapperScroll>
    );
};
