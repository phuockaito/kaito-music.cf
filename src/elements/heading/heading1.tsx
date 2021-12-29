import clsx from "clsx";

interface Heading1lProps {
    className?: string;
    title: string;
}

export const Heading1 = ({ className, title }: Heading1lProps) => {
    return <h1 className={clsx("text-4xl", className)}>{title}</h1>;
};
