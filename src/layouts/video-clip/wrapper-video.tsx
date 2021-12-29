import { IoIosClose } from "react-icons/io";
import { UseContextControllers } from "contexts";

import "./style.css";

export const WrapperVideo = () => {
    const { videoClip, setVideoClip } = UseContextControllers();
    const { isOpen, linkMv } = videoClip;
    return isOpen ? (
        <div className="bg-[#00000061] fixed top-0 left-0 w-full h-full z-[9999]">
            <div
                className="bg-[#ff3465] fixed left-4 top-4 cursor-pointer z-[99999] p-1 rounded-full"
                onClick={() => setVideoClip({ ...videoClip, isOpen: !isOpen })}
            >
                <IoIosClose size="2em" className="text-white" />
            </div>
            <div className="ground__wrapper__video">
                <iframe
                    className="responsive-iframe"
                    src={`https://www.youtube.com/embed/${linkMv}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    ) : null;
};
