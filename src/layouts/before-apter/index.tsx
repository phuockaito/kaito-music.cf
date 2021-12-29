import clsx from "clsx";
interface BeforeApterProps {
    onClick?: (e: any) => void;
    className?: string;
}

export const BeforeApter = ({ onClick, className }: BeforeApterProps) => {
    return (
        <div
            onClick={onClick}
            className={clsx(
                "fixed w-full h-full top-0 left-0 bottom-0 right-0 transition-ease-in-out bg-[#00000061]",
                className
            )}
        />
    );
};
