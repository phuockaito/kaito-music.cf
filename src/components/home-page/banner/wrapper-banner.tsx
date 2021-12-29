import { WrapperCarousel, Image } from "layouts";
import { Heading3 } from "elements";
import { bannerDefault } from "const";

const ResponsiveCarousel = {
    "(max-width: 480px)": {
        slidesPerView: 1,
        spacing: 10,
    },
};

export const WrapperBanner = () => {
    return (
        <div className="my-2">
            <Heading3 title="HOT" className="text-white mb-4" />
            <WrapperCarousel
                slidesPerView={2}
                spacingPerView={15}
                responsive={ResponsiveCarousel}
                snapMode="snap"
                autoplay
                loop
                time={5000}
            >
                {bannerDefault.map((item: string, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <Image src={item} imageClassName="w-full h-full" />
                    </div>
                ))}
            </WrapperCarousel>
        </div>
    );
};
