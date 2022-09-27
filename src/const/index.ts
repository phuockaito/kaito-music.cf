import { RiCompassDiscoverFill } from "react-icons/ri";
import { RiFileUserLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";

export enum ModalTypeEnum {
    ADD_LIST_MUSIC,
    LOGIN,
    REGISTER,
    EDIT_PLAYLIST,
    UPLOAD_MUSIC,
    EDIT_UPLOAD_MUSIC,
    NULL,
    OPEN_COMMENT,
}

export const homeMenu = [
    {
        title: "Cá nhân",
        href: "/profile",
        Icon: RiProfileLine,
    },
    {
        title: "Khám phá",
        href: "/",
        Icon: RiCompassDiscoverFill,
    },
    {
        title: "Đang theo dõi",
        href: "/following",
        Icon: RiFileUserLine,
    },
];

export const musicMenu = [
    {
        title: "Đã yêu thích",
        href: "/favorite",
        Icon: MdFavoriteBorder,
    },
    {
        title: "Bài hát đã nghe",
        href: "/listened-song",
        Icon: MdLibraryMusic,
    },
    {
        title: "Đã tải lên",
        href: "/upload-music",
        Icon: AiOutlineCloudUpload,
    },
];

export const bannerDefault = [
    "https://photo-zmp3.zadn.vn/banner/0/d/3/1/0d31409262ea007fd8909838ead4ba9a.jpg",
    "https://photo-zmp3.zadn.vn/banner/d/f/4/f/df4f2462b8b2a799caa699572c607282.jpg",
    "https://photo-zmp3.zadn.vn/banner/2/b/3/d/2b3d25f6f1aaa8d6f876a9e58e1338c5.jpg",
    "https://photo-zmp3.zadn.vn/banner/9/5/e/8/95e86abef57021304c30b9a9ec98bf84.jpg",
    "https://photo-zmp3.zadn.vn/banner/4/4/6/e/446e888537f27e9e4c569690b90a9bf3.jpg",
    "https://photo-zmp3.zadn.vn/banner/0/d/9/c/0d9ca3f0ae812e94c0fa618b66ac6fa4.jpg",
    "https://photo-zmp3.zadn.vn/banner/3/3/6/1/3361a0d09d7e557d849df9e3d0424827.jpg",
];

// export const REACT_APP_API_URL = "http://localhost:3001/api";
export const REACT_APP_API_URL = "https://api-v2-kaito-music.herokuapp.com/api";
export const CLINT_ID_GOOGLE = "147148304416-51hpf6le8b4q73jp3qpg9hvopvp32hbb.apps.googleusercontent.com";
