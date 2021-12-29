import clsx from "clsx";
import { Dropdown } from "antd";
import { saveAs } from "file-saver";

import { UseContextControllers } from "contexts";
import { UseModal, UseAccount, UsePlaylist } from "hooks";
import { Heading6 } from "elements";
import { NeedLogin } from "layouts";

import { MdVideoLibrary } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsDownload } from "react-icons/bs";
import { CgPlayListAdd } from "react-icons/cg";
import { AiFillDelete } from "react-icons/ai";

import { ModalTypeEnum } from "const";

interface OtherDotProps {
    isDeleteMusic?: boolean;
    className?: string;
    size?: string;
    nameMusic: string;
    srcMusic: string;
    _id?: string;
    link_mv?: string;
    placement?: "bottomLeft" | "bottomCenter" | "bottomRight" | "topLeft" | "topCenter" | "topRight";
}

export const OtherDot = ({
    isDeleteMusic,
    className,
    size = "2.2em",
    nameMusic,
    srcMusic,
    placement,
    _id,
    link_mv,
}: OtherDotProps) => {
    const { handleDeleteMusicPlaylist, id_playlist_old } = UsePlaylist();
    const { accessToken } = UseAccount();
    const { setVideoClip } = UseContextControllers();
    const { toggle } = UseModal();
    const content = (
        <div className="bg-[#2f2f3a] py-4 rounded-sm text-left" style={{ minWidth: "15em" }}>
            <div
                onClick={() => saveAs(srcMusic, `${nameMusic}.mp3`)}
                className="flex content-center space-x-4 py-2 px-4 cursor-pointer hover:bg-[rgba(33,33,42,255)]"
            >
                <BsDownload size="1.3rem" className="text-white" />
                <Heading6 title="Tải xuống" className="text-white m-0 p-0" />
            </div>
            <div
                className="flex content-center space-x-4 py-2 px-4 cursor-pointer hover:bg-[rgba(33,33,42,255)]"
                onClick={() => setVideoClip({ linkMv: link_mv, isOpen: true })}
            >
                <MdVideoLibrary size="1.3rem" className="text-white" />
                <Heading6 title="Xem MV" className="text-white m-0 p-0" />
            </div>
            {accessToken ? (
                <>
                    <NeedLogin
                        icon={<CgPlayListAdd size="1.5rem" className="text-white" />}
                        onClick={() => {
                            toggle({
                                type: ModalTypeEnum.ADD_LIST_MUSIC,
                                title: "Thêm vào playlist",
                                _id: _id,
                            });
                        }}
                    />
                    {isDeleteMusic && (
                        <div
                            className="flex content-center space-x-4 py-2 px-4 cursor-pointer hover:bg-[rgba(33,33,42,255)]"
                            onClick={() => handleDeleteMusicPlaylist({ _id: id_playlist_old, _id_music: _id })}
                        >
                            <AiFillDelete size="1.3rem" className="text-white" />
                            <Heading6 title="Xóa khỏi playlist" className="text-white m-0 p-0" />
                        </div>
                    )}
                </>
            ) : (
                <NeedLogin login icon={<CgPlayListAdd size="1.5rem" className="text-white" />} />
            )}
        </div>
    );
    return (
        <Dropdown overlay={content} placement={placement}>
            <HiOutlineDotsHorizontal className={clsx("text-white cursor-pointer", className)} size={size} />
        </Dropdown>
    );
};
