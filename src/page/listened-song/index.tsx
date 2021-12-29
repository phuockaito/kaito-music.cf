import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { CardLoading } from "layouts";
import { ItemCard, Heading3 } from "elements";

import { UsePlayHistory } from "hooks";
import { MusicType } from "type";

const ListenedSong = () => {
    const { HandelGetLayHistoryAPI, data, error, pagination } = UsePlayHistory();
    const previousPage = React.useRef<number>(1);
    const [page, setPage] = React.useState<number>(previousPage.current);

    const fetchMoreData = () => {
        if (data.length < pagination._total) setPage(page + 1);
    };

    React.useEffect(() => {
        if (!pagination._total || previousPage.current < page) HandelGetLayHistoryAPI({ _limit: 20, _page: page });
    }, [page, error, HandelGetLayHistoryAPI, pagination._total]);

    return !pagination._total ? (
        <CardLoading items={10} className="grid grid-template-columns-4 gap-4" />
    ) : (
        <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={data.length === pagination._total ? false : true}
            loader={<CardLoading items={data.length || 10} className="grid grid-template-columns-4 gap-4 my-4" />}
        >
            <Heading3 title="Lịch sử xem" className="text-white mb-4" />
            <div className="grid grid-template-columns-4 gap-4">
                {data.map((item: MusicType, index: number) => (
                    <ItemCard
                        key={index}
                        data={data}
                        index={index}
                        {...item}
                        className="grid grid-cols-1 min-w-3xl w-full h-full overflow-hidden bg-[rgba(33,33,42,255)]"
                    />
                ))}
            </div>
        </InfiniteScroll>
    );
};

export default ListenedSong;
