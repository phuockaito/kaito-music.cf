import clsx from "clsx";

import { WrapperCarousel, responsiveCarousel, CardLoading } from "layouts";
import { Heading3 } from "elements";
import { ItemCard } from "./item-card";
import { MusicType } from "type";
interface Props {
    className?: string;
    loading?: boolean;
    title?: string;
    titleClassName?: string;
    data: MusicType[];
}

export const CardMusic = ({ className, loading, title, titleClassName = "text-white mb-4", data }: Props) => {
    return (
        <div className={clsx("my-2", className)}>
            {title && !loading && <Heading3 title={title} className={titleClassName} />}
            {loading ? (
                <CardLoading />
            ) : (
                <WrapperCarousel slidesPerView={6} spacingPerView={10} responsive={responsiveCarousel}>
                    {data.map((item: MusicType, index: number) => (
                        <div className="keen-slider__slide bg-[rgba(33,33,42,255)]" key={index}>
                            <ItemCard
                                data={data}
                                index={index}
                                {...item}
                                className="grid grid-cols-1 min-w-3xl w-full h-full overflow-hidden"
                            />
                        </div>
                    ))}
                </WrapperCarousel>
            )}
        </div>
    );
};
