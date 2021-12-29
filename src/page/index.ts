import { lazy } from "react";

const HomePage = lazy(() => import("../components/home-page/home"));
const Favorite = lazy(() => import("./favorite"));
const ListenedSong = lazy(() => import("./listened-song"));
const UploadMusic = lazy(() => import("./upload-music"));

const Page = [
    {
        path: "/",
        exact: true,
        component: HomePage,
    },
    {
        path: "/favorite",
        exact: true,
        component: Favorite,
    },
    {
        path: "/listened-song",
        exact: true,
        component: ListenedSong,
    },
    {
        path: "/upload-music",
        exact: true,
        component: UploadMusic,
    },
];
export default Page;
