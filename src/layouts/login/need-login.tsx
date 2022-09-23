import React from "react";
import clsx from "clsx";

import { UseModal } from "hooks";
import { Heading5, Heading6 } from "elements";
import { ModalTypeEnum } from "const";
interface NeedLoginProps {
    title?: string;
    className?: string;
    titleClassName?: string;
    icon?: React.ReactNode;
    login?: boolean;
    onClick?: (e: any) => void;
    isContent?: boolean;
    Heading?: any;
}

export const NeedLogin = ({
    login,
    icon,
    title = "Thêm vào playlist",
    titleClassName = "text-white",
    className = "py-2 px-4 cursor-pointer hover:bg-[rgba(33,33,42,255)]",
    onClick,
    Heading = Heading6,
    isContent,
}: NeedLoginProps) => {
    const { toggle } = UseModal();
    return login ? (
        <div className={clsx("content-center", className)}>
            {isContent && (
                <Heading5
                    title="Đăng nhập để khám phá những playlist dành riêng cho chính bạn."
                    className="mb-2 text-white"
                />
            )}
            <div
                className={clsx(
                    "flex space-x-4 items-center",
                    isContent && "border border-white bg-[#01aaed] justify-center rounded-lg p-2 cursor-pointer"
                )}
                onClick={() => {
                    toggle({
                        type: ModalTypeEnum.LOGIN,
                        title: "Đăng nhập",
                    });
                }}
            >
                {icon}
                {title && <Heading title={title} className={titleClassName} />}
            </div>
        </div>
    ) : (
        <div className={clsx("flex content-center space-x-4 cursor-pointer", className)} onClick={onClick}>
            {icon}
            {title && <Heading title={title} className={titleClassName} />}
        </div>
    );
};
