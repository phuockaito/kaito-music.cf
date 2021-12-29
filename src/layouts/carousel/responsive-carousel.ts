import { carouselBreakpoint } from "./wrapper-carousel";
export const responsiveCarousel: carouselBreakpoint = {
    "(max-width: 1300px)": {
        slidesPerView: 5,
        mode: "free",
    },
    "(max-width: 1200px)": {
        slidesPerView: 4,
        mode: "free",
    },
    "(max-width: 1100px)": {
        slidesPerView: 3,
        mode: "free",
    },
    "(max-width: 950px)": {
        slidesPerView: 2,
        mode: "free",
    },

    "(max-width: 900px)": {
        slidesPerView: 4,
        mode: "free",
    },
    "(max-width: 800px)": {
        slidesPerView: 3,
        mode: "free",
    },
    "(max-width: 650px)": {
        slidesPerView: 2,
        mode: "free",
    },
    "(max-width: 600px)": {
        slidesPerView: 2,
        mode: "free",
    },
    "(max-width: 300px)": {
        slidesPerView: 1,
        mode: "free",
    },
};
