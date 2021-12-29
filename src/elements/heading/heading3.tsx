import clsx from "clsx";

interface Heading3Props {
    className?: string;
    title: string;
}

export const Heading3 = ({ className, title }: Heading3Props) => {
    return <h3 className={clsx("text-2xl", className)}>{title}</h3>;
};
