import { Heading3 } from "elements";
import { MusicType } from "type";
import { UserNewMusic } from "hooks";
import { ListLoading, ItemList } from "layouts";

export const NewMusic = () => {
    const { data, loading } = UserNewMusic();
    return loading ? (
        <ListLoading />
    ) : (
        <div className="my-4">
            <Heading3 title="Mới Phát Hành" className="text-white" />
            <div className="grid grid-template-columns gap-x-2 gap-y-1">
                {data.map((item: MusicType, index: number) => (
                    <ItemList
                        account_favorite={item.account_favorite}
                        timeFormat={item.time_format}
                        item={item}
                        key={item._id}
                        nameMusic={item.name_music}
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
