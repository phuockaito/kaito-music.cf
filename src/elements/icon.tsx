import { ReactNode } from "react";

interface IconProps {
    Src?: ReactNode;
    className?: string;
    onClick?: (e: any) => void;
}

export const Icon = ({ Src, className, onClick }: IconProps) => {
    return (
        <div onClick={onClick} className={className}>
            {Src}
        </div>
    );
};
