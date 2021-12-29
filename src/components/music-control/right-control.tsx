import { OtherDot } from "components";
import { FavoriteIcon } from "layouts";

import { UsePlaylist, UseComment } from "hooks";

import { RiPlayListLine } from "react-icons/ri";
import { AiOutlineComment } from "react-icons/ai";
interface RightControlProps {
    nameMusic: string;
    srcMusic: string;
    _id_music?: string;
    link_mv?: string;
}

const classNameIcon = "transition-ease-in-out text-white cursor-pointer transform hover:scale-125 opacity-100";
export const RightControl = ({ nameMusic, srcMusic, _id_music, link_mv }: RightControlProps) => {
    const { handleOpenPlaylist } = UsePlaylist();
    const { handleOpenComment } = UseComment();
    return (
        <div className="group_music_control__icon_list flex flex-1 justify-end space-x-4">
            <div className="grid gap-8 grid-cols-4">
                <FavoriteIcon size="2em" className={classNameIcon} _id_music={_id_music} />
                <AiOutlineComment size="2em" className={classNameIcon} onClick={() => handleOpenComment()} />
                <RiPlayListLine size="2em" className={classNameIcon} onClick={() => handleOpenPlaylist()} />
                <OtherDot
                    link_mv={link_mv}
                    size="2em"
                    className={classNameIcon}
                    nameMusic={nameMusic}
                    srcMusic={srcMusic}
                    placement="topRight"
                    _id={_id_music}
                />
            </div>
        </div>
    );
};
