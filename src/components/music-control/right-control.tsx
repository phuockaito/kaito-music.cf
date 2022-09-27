import { OtherDot } from "components";
import { FavoriteIcon } from "layouts";

import { UsePlaylist, UseComment, UseAccount } from "hooks";

import { RiPlayListLine } from "react-icons/ri";
import { AiOutlineComment } from "react-icons/ai";
interface RightControlProps {
    nameMusic: string;
    srcMusic: string;
    _id_music?: string;
    link_mv?: string;
    account_favorite: any;
}

const classNameIcon = "transition-ease-in-out text-white cursor-pointer transform hover:scale-125 opacity-100";
export const RightControl = ({ nameMusic, srcMusic, _id_music, link_mv, account_favorite }: RightControlProps) => {
    const { handleOpenPlaylist } = UsePlaylist();
    const { handleOpenComment } = UseComment();

    return (
        <div className="flex justify-end flex-1 space-x-4 group_music_control__icon_list">
            <div className="grid grid-cols-4 gap-8">
                <FavoriteIcon
                    size="2em"
                    className={classNameIcon}
                    _id_music={_id_music}
                    account_favorite={account_favorite}
                />
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
