import clsx from "clsx";
import { UseContextControllers } from "contexts";

import { UseAccount, UseFavoriteAccount } from "hooks";
import { NeedLogin } from "layouts";

import { MdFavorite } from "react-icons/md";
interface FavoriteIconProps {
    className?: string;
    size?: string;
    active?: boolean;
    _id_music?: string;
    id_account?: string;
    account_favorite: any;
}
export const FavoriteIcon = ({ className, size = "1.5em", active, _id_music, account_favorite }: FavoriteIconProps) => {
    const { accessToken, dataAccount } = UseAccount();
    const { setResultAccountFavorite } = UseContextControllers();
    const active_favorite = account_favorite?.find((item: any) => item?._id.toString() === dataAccount?._id);

    const { handleCreateFavorite } = UseFavoriteAccount();
    const onClickFavorite = async () => {
        const result: any = await handleCreateFavorite({ idMusic: _id_music });
        if (result) {
            setResultAccountFavorite({
                id_music: result.payload.id_music,
                account_favorite: result.payload.data,
                message: result.payload.message,
            });
        }
    };

    return (
        <NeedLogin
            login={!accessToken}
            title=""
            titleClassName=""
            className=""
            onClick={onClickFavorite}
            icon={
                <MdFavorite
                    className={clsx(
                        "text-white cursor-pointer hover:text-[#ff3465]",
                        className,
                        active_favorite && "text-[#ff3465]",
                        active ? "text-white opacity-100" : "group-hover:opacity-100 opacity-0"
                    )}
                    size={size}
                />
            }
        />
    );
};
