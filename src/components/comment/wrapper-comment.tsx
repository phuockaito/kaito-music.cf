import React from "react";
import clsx from "clsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaAnglesRight } from "react-icons/fa6";

import { UseComment, UseMusic } from "hooks";

import { Heading6, FormComment } from "elements";
import { BeforeApter, WrapperScroll, ListLoading } from "layouts";
import { ListComments } from "./list-comments";

import { AiOutlineComment } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { BiShow } from "react-icons/bi";

const formatView = new Intl.NumberFormat("de-DE", {
    notation: "standard",
});
export const WrapperComment = () => {
    const {
        handleCloseComment,
        handleGetComments,
        _id_music,
        data,
        pagination,
        isOpen,
        setEditComment,
        editComment,
        handleRemoveDataCommentOld,
    } = UseComment();
    const { favorite, view } = UseMusic();

    const previousPage = React.useRef<number>(1);
    const [page, setPage] = React.useState<number>(previousPage.current);

    React.useLayoutEffect(() => {
        if (_id_music) {
            handleRemoveDataCommentOld();
            setPage(1);
        }
    }, [_id_music, handleRemoveDataCommentOld]);

    React.useEffect(() => {
        if (_id_music) handleGetComments({ _id: _id_music, _limit: 7, _page: page });
    }, [_id_music, handleGetComments, page]);

    const fetchMoreData = () => {
        if (data.length < pagination._total) setPage(page + 1);
    };
    return (
        <div className="z-80">
            <div
                className={clsx(
                    "transition-ease-in-out flex fixed top-0 h-full bg-[rgba(33,33,42,255)] max-w-md w-full z-70",
                    isOpen ? "right-0" : "-right-full"
                )}
            >
                <div className="w-full h-full">
                    <div className="border-b-2 border-[#2f2f3a] p-3 min-h-[70px]">
                        <div className="flex justify-between items-center">
                            <FaAnglesRight
                                className="text-white rounded-full cursor-pointer"
                                size="1.2em"
                                onClick={() => handleCloseComment()}
                            />
                            <div className="flex flex-col items-center">
                                <MdFavorite className="text-xl text-white" />
                                <p className="mb-0 text-white">{favorite && formatView.format(favorite)}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <BiShow className="text-xl text-white" />
                                <p className="mb-0 text-white">{view && formatView.format(view)}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <AiOutlineComment className="text-xl text-white" />
                                <p className="mb-0 text-white">
                                    {pagination._total && formatView.format(pagination._total)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-full h-full">
                        <WrapperScroll className="h-full px-6 max-w-[440px] mb-52" id="scrollableDiv">
                            {data.length ? (
                                <InfiniteScroll
                                    dataLength={data.length}
                                    next={fetchMoreData}
                                    hasMore={data.length === pagination._total ? false : true}
                                    loader={
                                        <ListLoading items={3} className="grid gap-4 my-4 grid-template-columns-3" />
                                    }
                                    scrollableTarget="scrollableDiv"
                                >
                                    {data.map((item: any) => (
                                        <ListComments
                                            onSetEditComment={setEditComment}
                                            key={item._id}
                                            id_account_comment={item.id_account}
                                            _id_comment={item._id}
                                            content={item.content}
                                            account_image={item.account.image}
                                            comment_user_name={item.account.user_name}
                                            createdAt={item.createdAt}
                                        />
                                    ))}
                                </InfiniteScroll>
                            ) : (
                                <Heading6
                                    title="Hiện không có bình luận nào"
                                    className="absolute top-1/2 left-1/3 text-white"
                                />
                            )}
                        </WrapperScroll>
                        <FormComment id_music={_id_music} editComment={editComment} onSetEditComment={setEditComment} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <BeforeApter
                    className="z-60 bg-[#00000061]"
                    onClick={() => {
                        handleCloseComment();
                        setEditComment(null);
                    }}
                />
            )}
        </div>
    );
};
