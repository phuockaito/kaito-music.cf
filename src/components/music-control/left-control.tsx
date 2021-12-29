import clsx from "clsx";

import { Image } from "layouts";
import { Heading5, Heading6 } from "elements";

interface LeftControlProps {
    playing: boolean;
    imageMusic: string;
    nameSinger: string;
    nameMusic: string;
}

export const LeftControl = ({ playing, imageMusic, nameSinger, nameMusic }: LeftControlProps) => {
    return (
        <div className="group_music_control__image_tile flex items-center flex-1 space-x-4">
            <Image
                src={imageMusic}
                className={clsx("group_music_control__image w-16 h-16", playing && "ld ld-breath")}
                imageClassName="group_music_control__image"
            />

            <div className="group_music_control__title text-left flex-1">
                <Heading5 title={nameMusic} className="text-white mb-0 truncate whitespace-normal" />
                <Heading6 title={nameSinger} className="mb-0 truncate text-[#01aaed]" />
            </div>
        </div>
    );
};
