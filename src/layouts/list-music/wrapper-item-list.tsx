import { Heading3 } from "elements";
import { MusicType } from "type";
import { ListLoading, ItemList } from "layouts";

interface WrapperItemListProps {
    data: MusicType[];
    loading?: boolean;
    title: string;
}

export const WrapperItemList = ({ data, loading, title }: WrapperItemListProps) => {
    if (loading) return <ListLoading />;
    return (
        <div className="my-4">
            <Heading3 title={title} className="text-white" />
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 gap-x-2 gap-y-1">
                {data.map((item: MusicType, index: number) => (
                    <ItemList
                        account_favorite={item.account_favorite}
                        timeFormat={item.time_format}
                        item={item}
                        favorite={item.favorite}
                        key={item._id}
                        nameMusic={item.name_music}
                        view={item.view}
                        image={item.image_music}
                        nameSinger={item.name_singer}
                        _id={item._id}
                        src_music={item.src_music}
                        data={data}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};
