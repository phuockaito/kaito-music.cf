import { UseMusic } from "hooks";

import { CgPlayPauseO } from "react-icons/cg";
import { AiOutlinePlayCircle } from "react-icons/ai";

interface PlayPauseProps {
    index: number;
    _id: string;
    data: any;
}

const IconClassName = "transition duration-300 ease-in-out text-white cursor-pointer transform hover:scale-125";
export const PlayPause = ({ _id, data, index }: PlayPauseProps) => {
    const tempData = { data, index, _id };
    const { handleOnIndexMusic, _id_music, playing, handlePausePlayClick } = UseMusic();
    return (
        <>
            {_id === _id_music ? (
                <>
                    {playing ? (
                        <CgPlayPauseO className={IconClassName} size="2.2em" onClick={handlePausePlayClick} />
                    ) : (
                        <AiOutlinePlayCircle className={IconClassName} size="2.2em" onClick={handlePausePlayClick} />
                    )}
                </>
            ) : (
                <AiOutlinePlayCircle
                    className={IconClassName}
                    size="2.2em"
                    onClick={() => handleOnIndexMusic(tempData)}
                />
            )}
        </>
    );
};
