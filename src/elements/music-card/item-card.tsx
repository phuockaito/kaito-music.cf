import clsx from "clsx";

import { ItemInformation, HoverPlay, Image } from "layouts";
import { MusicType } from "type";

import "./style.css";
interface ItemCardProps {
    className?: string;
    index: number;
    data?: MusicType[] | any;
}
type CustomProps = MusicType & ItemCardProps;

export const ItemCard = (props: CustomProps) => {
    const { view } = props;
    return (
        <div className={clsx("relative group", props.className)}>
            <Image
                src={props.image_music}
                alt={props.image_music}
                timeMusic={
                    <p className="absolute top-2 right-2 rounded text-white bg-[#1c191794] py-1 px-2 text-xs">
                        {props.time_format}
                    </p>
                }
                imageClassName="h-full w-full absolute"
                className="group-image__music"
            >
                <HoverPlay
                    account_favorite={props.account_favorite}
                    link_mv={props.link_mv}
                    _id={props._id}
                    data={props.data}
                    index={props.index}
                    nameMusic={props.name_music}
                    srcMusic={props.src_music}
                />
            </Image>
            <ItemInformation
                nameMusic={props.name_music}
                nameSinger={props.name_singer}
                favorite={props.favorite}
                view={view}
            />
        </div>
    );
};
