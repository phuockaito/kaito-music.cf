import clsx from "clsx";

interface Heading5Props {
    className?: string;
    title: string;
}

export const Heading5 = ({ className, title }: Heading5Props) => {
    return <h5 className={clsx("text-lg", className)}>{title}</h5>;
};
