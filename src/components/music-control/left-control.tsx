import clsx from "clsx";

import { Image } from "layouts";
import { Heading5, Heading6 } from "elements";
import { UseContextControllers } from "contexts";

interface LeftControlProps {
    playing: boolean;
    imageMusic: string;
    nameSinger: string;
    nameMusic: string;
}
const formatView = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 3,
});
export const LeftControl = ({ playing, imageMusic, nameSinger, nameMusic }: LeftControlProps) => {
    const { musicPlay } = UseContextControllers();

    return (
        <div className="flex items-center flex-1 space-x-4 group_music_control__image_tile">
            <Image
                src={imageMusic}
                className={clsx("group_music_control__image w-16 h-16", playing && "ld ld-breath")}
                imageClassName="group_music_control__image"
            />

            <div className="flex-1 text-left group_music_control__title">
                <Heading5 title={nameMusic} className="mb-0 text-white truncate whitespace-normal" />
                <Heading6 title={nameSinger} className="mb-0 truncate text-[#01aaed]" />
                {musicPlay && (
                    <div className="flex gap-3">
                        <div className="flex text-[#a5a6c4] items-center rounded-b-[0.35rem]">
                            <p className="m-0 text-sm font-semibold truncate">
                                {formatView.format(musicPlay.view)} <span>lượt xem</span>
                            </p>
                        </div>
                        <div className="flex text-[#a5a6c4] items-center rounded-b-[0.35rem]">
                            <p className="m-0 text-sm font-semibold truncate">
                                {formatView.format(musicPlay.favorite)} <span>lượt thích</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
