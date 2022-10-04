import clsx from "clsx";
import React from "react";

import "./style.css";

interface WrapperScrollProps {
    className?: string;
    id?: string;
    style?: any;
}

export const WrapperScroll = ({
    children,
    className = "max-h-64",
    id,
    style,
}: React.PropsWithChildren<WrapperScrollProps>) => {
    return (
        <div className={clsx("wrapper-scroll w-full", className)} id={id} style={style}>
            {children}
        </div>
    );
};
