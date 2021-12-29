import { PropsWithChildren } from "react";
import clsx from "clsx";
interface SectionProps {
    className?: string;
}

export const Section = ({ className = "p-4", children }: PropsWithChildren<SectionProps>) => {
    return <div className={clsx("min-height-screen relative", className)}>{children}</div>;
};
