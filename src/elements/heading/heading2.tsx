import clsx from "clsx";

interface Heading2Props {
    className?: string;
    title: string;
}

export const Heading2 = ({ className, title }: Heading2Props) => {
    return <h2 className={clsx("text-3xl", className)}>{title}</h2>;
};
