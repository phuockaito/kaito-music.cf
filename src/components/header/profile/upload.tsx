import { Tooltip } from "antd";

import { UseModal } from "hooks";
import { ModalTypeEnum } from "const";

import { BsUpload } from "react-icons/bs";
import "./style.css";

export const UploadMusic = () => {
    const { toggle } = UseModal();

    return (
        <Tooltip placement="bottomRight" title={<p className="text-white m-0">Tải nhạc lên</p>}>
            <div
                onClick={() => toggle({ type: ModalTypeEnum.UPLOAD_MUSIC, title: "Tải nhạc lên" })}
                className="group-upload w-10 h-10 flex items-center justify-center	p-2 border border-[#3e3f44] bg-[#3e3f44] rounded cursor-pointer relative"
            >
                <BsUpload className="text-white group-upload__icon relative top-[2px]" size="1.1em" />
            </div>
        </Tooltip>
    );
};
