import clsx from "clsx";

import { UseMusic } from "hooks";
import { PlayPause } from "./play-pause";
import { OtherDot } from "components";
import { FavoriteIcon } from "layouts";
import { MusicType } from "type";
interface HoverPlayProps {
    className?: string;
    _id: string;
    index: number;
    data: MusicType;
    nameMusic: string;
    srcMusic: string;
    link_mv?: string;
    account_favorite: any;
}
const IconClassName = "transition duration-300 ease-in-out text-white cursor-pointer transform hover:scale-125";
export const HoverPlay = ({ _id, data, index, nameMusic, srcMusic, link_mv, account_favorite }: HoverPlayProps) => {
    const { _id_music, playing } = UseMusic();
    return (
        <div
            className={clsx(
                "absolute flex justify-center items-center left-0 top-0 w-full h-full bg-[#00000061]",
                !(_id === _id_music && playing) && "group-hover:opacity-100 opacity-0"
            )}
        >
            <div className="flex justify-between w-full px-4">
                <FavoriteIcon
                    className={IconClassName}
                    size="2.2em"
                    active
                    _id_music={_id}
                    account_favorite={account_favorite}
                />
                <PlayPause _id={_id} data={data} index={index} />
                <OtherDot
                    link_mv={link_mv}
                    className={IconClassName}
                    size="2.2em"
                    nameMusic={nameMusic}
                    srcMusic={srcMusic}
                    placement="topRight"
                    _id={_id}
                />
            </div>
        </div>
    );
};
