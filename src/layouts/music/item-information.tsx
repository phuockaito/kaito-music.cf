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
    classNameView?: string;
}

export const ItemInformation = ({
    className = "px-2 py-3 w-full",
    nameMusic,
    nameMusicClassName,
    view,
    favorite,
    nameSinger,
    classNameView = "space-y-1",
}: ItemInformationProps) => {
    const formatView = new Intl.NumberFormat("de-DE", {
        notation: "standard",
    });
    return (
        <div className={className}>
            <div>
                <Heading6 title={nameMusic} className={clsx("p-0 m-0 text-white truncate", nameMusicClassName)} />
                <p className="text-[#01aaed] m-0 p-0 truncate text-sm font-semibold">{nameSinger}</p>
            </div>
            <div className={classNameView}>
                {view && (
                    <div className="flex text-[#a5a6c4] items-center rounded-b-[0.35rem]">
                        <BiShow className="mr-2 w-4 h-4" />
                        <p className="m-0 text-sm font-semibold truncate">{view && formatView.format(view)} Luợt xem</p>
                    </div>
                )}
                {favorite && (
                    <div className="flex text-[#a5a6c4] items-center rounded-b-[0.35rem]">
                        <MdFavoriteBorder className="mr-2 w-4 h-4" />
                        <p className="m-0 text-sm font-semibold truncate">
                            {favorite && formatView.format(favorite)} Yêu thích
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
