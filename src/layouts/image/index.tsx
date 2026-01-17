import { ReactNode } from "react";
import clsx from "clsx";

import { LazyLoadImage } from "react-lazy-load-image-component";

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
                wrapperProps={{
                    style: {
                        transitionDelay: "0.4s",
                    },
                }}
                effect="blur"
                src={src}
                alt={alt}
                key={alt}
                height="100%"
                width="100%"
                className={clsx("rounded-[0.35rem] object-cover", imageClassName)}
                wrapperClassName={clsx("rounded-[0.35rem] object-cover", imageClassName)}
            />
            {timeMusic}
            {children}
        </div>
    );
};
