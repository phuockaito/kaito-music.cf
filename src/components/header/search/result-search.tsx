import React from "react";
import clsx from "clsx";

import { UseContextControllers } from "contexts";
import { UseMusic } from "hooks";
import { Image, WrapperScroll } from "layouts";
import { MusicType } from "type";
import { Link } from "react-router-dom";
import { Heading6 } from "elements";
interface ResultSearchProps {
    data: any[];
    className?: string;
}
export const ResultSearch = ({ data, className }: ResultSearchProps) => {
    const { handleOnIndexMusic } = UseMusic();
    const { openSearch, setOpenSearch } = UseContextControllers();

    const close = (index: number, _id: string) => {
        const tempData = { index: index, data: data, _id };
        setOpenSearch(false);
        handleOnIndexMusic(tempData);
    };

    return (
        <div className={clsx("group-search__list absolute z-10 rounded", className)}>
            <WrapperScroll className={clsx(openSearch ? "active max-h-96" : "not-active")}>
                <ul className={clsx(openSearch ? "active" : "not-active")}>
                    {data.length ? (
                        data.map((item: MusicType, index: number) => (
                            <li
                                key={index}
                                onClick={() => {
                                    close(index, item._id);
                                }}
                                className="text-left truncate group"
                            >
                                <Link to="/" className="text-[#dfe6eb] flex group-hover:text-[#ff3465]">
                                    <Image
                                        src={item.image_music}
                                        alt={item.name_music}
                                        imageClassName="w-8 h-8"
                                        className="mr-2"
                                    />
                                    <Heading6
                                        title={item.name_music}
                                        className="group-hover:text-[#ff3465] text-white truncate flex-1"
                                    />
                                </Link>
                            </li>
                        ))
                    ) : (
                        <Heading6
                            title="Rất tiếc không tìm thấy kết quả nào"
                            className="group-hover:text-[#ff3465] text-white truncate flex-1"
                        />
                    )}
                </ul>
            </WrapperScroll>
        </div>
    );
};
