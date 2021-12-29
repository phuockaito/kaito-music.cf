import clsx from "clsx";

import { UseAccount, UseFavoriteAccount } from "hooks";
import { NeedLogin } from "layouts";

import { MdFavorite } from "react-icons/md";
interface FavoriteIconProps {
    className?: string;
    size?: string;
    active?: boolean;
    _id_music?: string;
}
export const FavoriteIcon = ({ className, size = "1.5em", active, _id_music }: FavoriteIconProps) => {
    const { accessToken } = UseAccount();
    const { handleCreateFavorite } = UseFavoriteAccount();

    return (
        <NeedLogin
            login={!accessToken}
            title=""
            titleClassName=""
            className=""
            onClick={() => handleCreateFavorite({ idMusic: _id_music })}
            icon={
                <MdFavorite
                    className={clsx(
                        "text-white cursor-pointer hover:text-[#ff3465]",
                        className,
                        active ? "text-white opacity-100" : "group-hover:opacity-100 opacity-0"
                    )}
                    size={size}
                />
            }
        />
    );
};
