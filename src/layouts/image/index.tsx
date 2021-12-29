import { ReactNode } from "react";
import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageProps {
    className?: string;
    imageClassName?: string;
    src: string;
    onClick?: (e: any) => void;
    alt?: string;
    timeMusic?: ReactNode;
}

export const Image = ({
    className,
    imageClassName,
    timeMusic,
    src,
    onClick,
    alt,
    children,
}: React.PropsWithChildren<ImageProps>) => {
    return (
        <div className={clsx("relative", className)} onClick={onClick}>
            <LazyLoadImage
                effect="blur"
                src={src}
                alt={alt}
                key={alt}
                height="100%"
                width="100%"
                className={clsx("rounded-sm object-revert", imageClassName)}
                wrapperClassName={clsx("rounded-sm object-revert", imageClassName)}
            />
            {timeMusic}
            {children}
        </div>
    );
};
