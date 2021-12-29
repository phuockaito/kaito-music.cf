import clsx from "clsx";

interface Heading6Props {
    className?: string;
    title: string;
}

export const Heading6 = ({ className, title }: Heading6Props) => {
    return <h6 className={clsx("text-base", className)}>{title}</h6>;
};
