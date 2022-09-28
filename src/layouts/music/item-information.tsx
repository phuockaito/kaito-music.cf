import { Heading6 } from "elements";
import { BiShow } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import clsx from "clsx";

interface ItemInformationProps {
    className?: string;
    nameMusic: string;
    nameMusicClassName?: string;
    nameSinger: string;
    favorite?: number;
    view?: number;
}

export const ItemInformation = ({
    className = "w-full px-2 py-3",
    nameMusic,
    nameMusicClassName,
    view,
    favorite,
    nameSinger,
}: ItemInformationProps) => {
    const formatView = new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
    });
    return (
        <div className={className}>
            <div className="mb-2">
                <Heading6 title={nameMusic} className={clsx("text-white p-0 m-0 truncate", nameMusicClassName)} />
                <p className="text-[#01aaed] m-0 p-0 truncate text-sm font-semibold">{nameSinger}</p>
            </div>
            <div className="space-y-1">
                {view && (
                    <div className="flex text-[#a5a6c4] items-center rounded-b-sm">
                        <BiShow className="w-4 h-4 mr-2" />
                        <p className="m-0 text-sm font-semibold truncate">{view && formatView.format(view)} lượt xem</p>
                    </div>
                )}
                {favorite && (
                    <div className="flex text-[#a5a6c4] items-center rounded-b-sm">
                        <MdFavoriteBorder className="w-4 h-4 mr-2" />
                        <p className="m-0 text-sm font-semibold truncate">
                            {favorite && formatView.format(favorite)} lượt thích
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
