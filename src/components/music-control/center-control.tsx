import React from "react";
import clsx from "clsx";
import TimeSlider from "react-input-slider";
import { Duration } from "layouts";
import { UseMusic } from "hooks";

import { FaRandom } from "react-icons/fa";
import { CgPlayPauseO } from "react-icons/cg";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CgPlayBackwards, CgPlayForwards } from "react-icons/cg";
import { ImLoop } from "react-icons/im";
import { UseContextControllers } from "contexts";

interface CenterControlProps {
    src_music: string;
}

const iconClassName = "transition-ease-in-out text-white cursor-pointer transform hover:scale-125";
export const CenterControl = ({ src_music }: CenterControlProps) => {
    const { videoClip } = UseContextControllers();
    const { isOpen } = videoClip;
    const { resultMusic, handleOnAudio, handleOnPauseMusic, handleOnRandomMusic, handleOnNextPrevMusic } = UseMusic();
    const { index, audio, playing } = resultMusic;
    // create state
    const [loop, setLoop] = React.useState<boolean>(false);
    const audioRef = React.useRef<any>(null);
    const [duration, setDuration] = React.useState<number>(0);
    const [currentTime, setCurrentTime] = React.useState<number>(0);
    const [isRandom, setIsRandom] = React.useState<boolean>(false);
    //  function
    const handleLoadedData = React.useCallback(() => {
        setDuration(audioRef.current.duration);
        handleOnAudio(audioRef.current);
    }, [handleOnAudio]);

    const onTimeUpdate = React.useCallback(() => {
        setCurrentTime(audioRef.current.currentTime);
        if (audioRef.current.currentTime === audioRef.current.duration) {
            if (!loop) handleOnPauseMusic(!playing);
            if (isRandom) handleOnRandomMusic();
        }
    }, [handleOnPauseMusic, handleOnRandomMusic, isRandom, loop, playing]);

    const handlePausePlayClick = React.useCallback(() => {
        if (playing) audio?.pause();
        else audio?.play();
        handleOnPauseMusic(!playing);
    }, [audio, handleOnPauseMusic, playing]);

    const handleTimeSliderChange = React.useCallback(
        (position: any) => {
            const { x } = position;
            audioRef.current.currentTime = x;
            setCurrentTime(x);
            if (!playing) {
                handleOnPauseMusic(true);
                audioRef.current.play();
            }
        },
        [handleOnPauseMusic, playing]
    );

    React.useEffect(() => {
        if (isOpen) {
            audio?.pause();
            handleOnPauseMusic(false);
        }
    }, [audio, handleOnPauseMusic, isOpen]);

    return (
        <>
            <audio
                src={src_music}
                controls
                loop={loop}
                autoPlay
                ref={audioRef}
                onLoadedData={handleLoadedData}
                onTimeUpdate={onTimeUpdate}
                hidden
            />
            <div className="group_play_control grid grid-rows-1 w-full max-w-sm flex-1 space-y-2">
                <div className="flex items-center justify-between">
                    <ImLoop
                        className={clsx(
                            "transition-ease-in-out text-white cursor-pointer transform hover:scale-125",
                            loop ? "text-[#ff3465]" : "text-white"
                        )}
                        size="1.3em"
                        onClick={() => setLoop(!loop)}
                    />
                    <CgPlayBackwards
                        className={iconClassName}
                        size="2em"
                        onClick={() => handleOnNextPrevMusic(index - 1)}
                    />
                    {playing ? (
                        <CgPlayPauseO className={iconClassName} size="2em" onClick={() => handlePausePlayClick()} />
                    ) : (
                        <AiOutlinePlayCircle
                            className={iconClassName}
                            size="2em"
                            onClick={() => handlePausePlayClick()}
                        />
                    )}
                    <CgPlayForwards
                        className={iconClassName}
                        size="2em"
                        onClick={() => handleOnNextPrevMusic(index + 1)}
                    />
                    <FaRandom
                        className={clsx(
                            "transition-ease-in-out text-white cursor-pointer transform hover:scale-125",
                            isRandom ? "text-[#ff3465]" : "text-white"
                        )}
                        size="1.5em"
                        onClick={() => setIsRandom(!isRandom)}
                    />
                </div>
                <div className="group_play_control__play flex w-full space-x-2 items-center">
                    <div className="w-8">
                        <Duration seconds={currentTime} className="rounded text-white" />
                    </div>
                    <TimeSlider
                        axis="x"
                        xmax={duration}
                        x={currentTime}
                        onChange={handleTimeSliderChange}
                        styles={{
                            track: {
                                backgroundColor: "#e3e3e3",
                                height: "8px",
                                width: "100%",
                                borderRadius: "8px",
                            },
                            active: {
                                height: "8px",
                                width: "100%",
                                borderRadius: "8px",
                                background: "linear-gradient(90deg,#008aff,#00ffe7)",
                            },
                            thumb: {
                                width: "13px",
                                height: "13px",
                                background: "linear-gradient(90deg,#008aff,#00ffe7)",
                                borderRadius: "50%",
                            },
                        }}
                    />
                    <Duration seconds={duration} className="rounded text-white" />
                </div>
            </div>
        </>
    );
};
