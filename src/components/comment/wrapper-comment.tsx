import React from "react";
import clsx from "clsx";

import { UseComment, UseMusic } from "hooks";

import { Heading6, FormComment } from "elements";
import { BeforeApter, WrapperScroll } from "layouts";
import { ListComments } from "./list-comments";

import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiOutlineComment } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BiShow } from "react-icons/bi";

const formatView = new Intl.NumberFormat("vn");

export const WrapperComment = () => {
    const { handleCloseComment, handleGetComments, _id_music, data, pagination, isOpen } = UseComment();
    const { favorite, view } = UseMusic();

    React.useEffect(() => {
        if (_id_music) handleGetComments({ _id: _id_music });
    }, [_id_music, handleGetComments]);

    return (
        <div className="z-80">
            <div
                className={clsx(
                    "transition-ease-in-out flex fixed top-0 h-full bg-[rgba(33,33,42,255)] max-w-md w-full z-70",
                    isOpen ? "right-0" : "-right-full"
                )}
            >
                <div className="w-full h-full">
                    <div className="border-b-2 border-[#2f2f3a] m-4 min-h-[70px]">
                        <div className="flex justify-between">
                            <HiOutlineArrowLeft
                                className="text-white cursor-pointer rounded-full"
                                size="1.5em"
                                onClick={() => handleCloseComment()}
                            />
                            <div className="flex flex-col items-center">
                                <MdFavorite className="text-white text-xl mb-2" />
                                <p className="text-white mb-0">{favorite && formatView.format(favorite)}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <BiShow className="text-white text-xl mb-2" />
                                <p className="text-white mb-0">{view && formatView.format(view)}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <AiOutlineComment className="text-white text-xl mb-2" />
                                <p className="text-white mb-0">
                                    {pagination._total && formatView.format(pagination._total)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full w-full justify-between">
                        <WrapperScroll className="h-full px-6 max-w-[440px] mb-52">
                            {data.length ? (
                                data.map((item: any) => <ListComments {...item} key={item._id} />)
                            ) : (
                                <Heading6
                                    title="Hiện không có bình luận nào"
                                    className="text-white left-1/3 absolute top-1/2"
                                />
                            )}
                        </WrapperScroll>
                        <FormComment id_music={_id_music} />
                    </div>
                </div>
            </div>
            {isOpen && <BeforeApter className="z-60 bg-[#00000061]" onClick={() => handleCloseComment()} />}
        </div>
    );
};
