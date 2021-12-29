import "./style.css";
import clsx from "clsx";
interface CircleLoadingProps {
    className?: string;
}

export const CircleLoading = ({ className = "w-8 h-8 my-4" }: CircleLoadingProps) => {
    return (
        <div className={clsx("relative mx-auto", className)} id="loading">
            <div></div>
            <div></div>
        </div>
    );
};
