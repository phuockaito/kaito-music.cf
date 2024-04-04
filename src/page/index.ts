import { lazy } from "react";

export const HomePage = lazy(() => import("../components/home-page/home"));
export const Favorite = lazy(() => import("./favorite"));
export const ListenedSong = lazy(() => import("./listened-song"));
export const UploadMusic = lazy(() => import("./upload-music"));

const Page = [
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/favorite",
        Component: Favorite,
    },
    {
        path: "/listened-song",
        Component: ListenedSong,
    },
    {
        path: "/upload-music",
        Component: UploadMusic,
    },
];
export default Page;
