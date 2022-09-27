import React from "react";
import { UseFavoriteAccount } from "hooks";

import { ItemList, ListLoading } from "layouts";
import { Heading3 } from "elements";

const Favorite = () => {
    const { data, error, handleGetFavoriteAccount, loading } = UseFavoriteAccount();

    React.useEffect(() => {
        if (!data.length) handleGetFavoriteAccount({ _limit: 30 });
    }, [error, handleGetFavoriteAccount]);

    return loading ? (
        <ListLoading items={27} className="grid grid-template-columns-3 gap-x-2 gap-y-1" />
    ) : (
        <>
            <Heading3 title="Đã thích" className="mb-4 text-white" />
            <div className="grid gap-3 grid-template-columns-3">
                {data.map((item, index) => (
                    <ItemList
                        account_favorite={item.music.account_favorite}
                        key={item._id}
                        timeFormat={item.music.time_format}
                        item={item.music}
                        nameMusic={item.music.name_music}
                        image={item.music.image_music}
                        nameSinger={item.music.name_singer}
                        _id={item.id_music}
                        src_music={item.music.src_music}
                        data={data}
                        index={index}
                        otherDot
                    />
                ))}
            </div>
        </>
    );
};
export default Favorite;
