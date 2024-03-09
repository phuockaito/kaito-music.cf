import { lazy } from "react";

const HomePage = lazy(() => import("../components/home-page/home"));
const Favorite = lazy(() => import("./favorite"));
const ListenedSong = lazy(() => import("./listened-song"));
const UploadMusic = lazy(() => import("./upload-music"));

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
