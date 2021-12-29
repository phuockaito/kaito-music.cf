import clsx from "clsx";
import React from "react";

import "./style.css";

interface WrapperScrollProps {
    className?: string;
    id?: string;
}

export const WrapperScroll = ({
    children,
    className = "max-h-64",
    id,
}: React.PropsWithChildren<WrapperScrollProps>) => {
    return (
        <div className={clsx("wrapper-scroll w-full", className)} id={id}>
            {children}
        </div>
    );
};
