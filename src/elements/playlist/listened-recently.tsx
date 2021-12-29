import React from "react";
import clsx from "clsx";

import { WrapperScroll, ItemList, NeedLogin, ListLoading } from "layouts";

import { MusicType } from "type";
import { FcGoogle } from "react-icons/fc";
import { UsePlayHistory } from "hooks";
interface ListenedRecentlyProps {
    className?: string;
    children?: React.ReactNode;
}
export const ListenedRecently = ({ className, children }: ListenedRecentlyProps) => {
    const { HandelGetLayHistoryAPI, data, loading, accessToken, error } = UsePlayHistory();

    React.useEffect(() => {
        if (!data.length) HandelGetLayHistoryAPI({ _limit: 20 });
    }, [HandelGetLayHistoryAPI, error]);

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
            {data.map((item: MusicType, index: number) => (
                <ItemList
                    key={item._id}
                    timeFormat={item.time_format}
                    link_mv={item.link_mv}
                    oneMusic
                    otherDot
                    data={data}
                    nameMusic={item.name_music}
                    image={item.image_music}
                    nameSinger={item.name_singer}
                    _id={item._id}
                    src_music={item.src_music}
                    index={index}
                    activeClass="bg-[#ff3465]"
                    item={item}
                />
            ))}
            {children}
        </WrapperScroll>
    );
};
