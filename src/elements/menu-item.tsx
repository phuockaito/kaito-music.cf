import clsx from "clsx";
import { Popconfirm } from "antd";
import { ReactNode } from "react";
import { useHistory } from "react-router-dom";

import { UsePlaylist, UseModal } from "hooks";
import { Icon } from "./icon";
import { Heading5, Heading6 } from "./heading";
import { ModalTypeEnum } from "const";

import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { VscLoading } from "react-icons/vsc";
interface MenuItemProps {
    _id?: string;
    loading?: boolean;
    title: string;
    href?: "/" | string;
    className?: string;
    titleClassName?: string;
    iconClassName?: string;
    icon?: ReactNode;
    setOpen?: () => void;
    onClick?: () => void;
    isEditDelete?: boolean;
}

export const MenuItem = ({
    title,
    href = "/",
    className,
    iconClassName = "group-hover:text-[#ff3465] text-[#a5a6c4]",
    titleClassName = "text-[#a5a6c4] group-hover:text-[#ff3465]",
    icon,
    onClick,
    _id,
    setOpen,
    isEditDelete,
}: MenuItemProps) => {
    const history = useHistory();
    const { toggle } = UseModal();
    const { resultPlayList, handleDeletePlaylist } = UsePlaylist();
    const { loadingAddListMusic, id_playlist } = resultPlayList;

    const onClickURL = () => {
        if (onClick) onClick();
        else {
            history.push(href);
            if (setOpen) setOpen();
        }
    };

    return (
        <div className={clsx("flex items-center cursor-pointer truncate justify-between w-full", className)}>
            <div onClick={onClickURL} className="flex w-full">
                {loadingAddListMusic && id_playlist === _id ? (
                    <VscLoading className={clsx("animate-spin", iconClassName)} size="1.5em" />
                ) : (
                    <Icon Src={icon} className={iconClassName} />
                )}
                <Heading5 title={title} className={clsx("m-0 pl-4", titleClassName)} />
            </div>
            {isEditDelete && (
                <div className="flex opacity-0 group-hover:opacity-100 text-white space-x-4">
                    <FiEdit
                        size="1.3rem"
                        className="text-white"
                        onClick={() => {
                            toggle({
                                type: ModalTypeEnum.EDIT_PLAYLIST,
                                title: "Đổi tên playlist",
                                _id,
                                others: { nameList: title },
                            });
                        }}
                    />
                    <Popconfirm
                        title={<Heading6 title="Bạn chắc chắn xóa playlist này không" className="text-white" />}
                        onConfirm={() => handleDeletePlaylist({ _id })}
                        okText="Có"
                        cancelText="Không"
                        placement="bottomRight"
                    >
                        <AiFillDelete size="1.3rem" className="text-white" />
                    </Popconfirm>
                </div>
            )}
        </div>
    );
};
