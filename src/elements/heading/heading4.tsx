import clsx from "clsx";

interface Heading4Props {
    className?: string;
    title: string;
}

export const Heading4 = ({ className, title }: Heading4Props) => {
    return <h4 className={clsx("text-xl", className)}>{title}</h4>;
};
