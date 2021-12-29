import { useEffect, PropsWithChildren } from "react";
import { useKeenSlider } from "keen-slider/react";
import { TOptionsEvents, TOptions } from "keen-slider";
// Check Type Props
export interface carouselBreakpoint {
    [key: string]: Omit<TOptionsEvents, "breakpoints">;
}
interface WrapperCarouselProps {
    rtlCarousel?: boolean;
    responsive?: carouselBreakpoint;
    classCarousel?: string;
    defaultCarousel?: number;
    autoplay?: boolean;
    time?: number;
    loop?: boolean;
    slidesPerView?: number;
    spacingPerView?: number;
    centerCarousel?: boolean;
    snapMode?: "free" | "snap" | "free-snap";
}
// Default Props
const RtlCarousel = false;
const DefaultCarousel = 0;
const Autoplay = false;
const Time = 3000;
const Loop = false;
const SlidesPerView = 1;
const SpacingPerView = 5;
const SnapMode = "free";
const CenterCarousel = false;
const ClassCarousel = "carousel relative";
// Render
export const WrapperCarousel = ({
    children,
    rtlCarousel = RtlCarousel,
    responsive,
    defaultCarousel = DefaultCarousel,
    autoplay = Autoplay,
    time = Time,
    loop = Loop,
    slidesPerView = SlidesPerView,
    spacingPerView = SpacingPerView,
    snapMode = SnapMode,
    centerCarousel = CenterCarousel,
    classCarousel = ClassCarousel,
    ...rest
}: PropsWithChildren<WrapperCarouselProps> & TOptionsEvents & TOptions) => {
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        initial: defaultCarousel,
        loop: loop,
        mode: snapMode,
        duration: time,
        slidesPerView: slidesPerView,
        spacing: spacingPerView,
        centered: centerCarousel,
        rtl: rtlCarousel,
        breakpoints: responsive,
        ...rest,
    });
    // Effect
    useEffect(() => {
        const clear = setInterval(() => {
            if (autoplay && slider) {
                slider.next();
            }
        }, time);
        return () => {
            clearInterval(clear);
        };
    }, [autoplay, slider, time]);

    // Return
    return (
        <div className={classCarousel}>
            <div ref={sliderRef} className="keen-slider flex">
                {children}
            </div>
        </div>
    );
};
