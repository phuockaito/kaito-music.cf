import { useEffect } from "react";
import clsx from "clsx";
import { useHistory, useLocation } from "react-router-dom";

import { WrapperScroll, BeforeApter, PlaylistsAlbums, NeedLogin } from "layouts";
import { Heading5 } from "elements";

import { useToggle, UseAccount } from "hooks";
import { UseContextControllers } from "contexts";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import { musicMenu, homeMenu } from "const";
import "./style.css";

export const Menu = () => {
    let { pathname } = useLocation();
    const history = useHistory();

    const { dropdownMenu } = UseContextControllers();
    const { open, setOpen } = useToggle();
    const { accessToken } = UseAccount();

    const handlePushPage = (path: string) => {
        history.push(path);
        setOpen(false);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    const activeMenu = (path: string) =>
        path === pathname ? "text-[#ff3465]" : "group-hover:text-[#ff3465] text-[#a5a6c4]";

    return (
        <div>
            <div
                className={clsx(
                    "toggle-menu transition-ease-in-out hidden fixed z-20 right-4 w-8 h-8 bg-[#ff3465] p-1 cursor-pointer rounded-sm top-24"
                )}
                onClick={() => setOpen(!open)}
            >
                <AiOutlineMenuUnfold className="text-white" size="1.5em" />
            </div>
            <div
                className={clsx(
                    "group-menu transition-ease-in-out fixed w-72 h-full bg-[rgba(33,33,42,255)] z-30",
                    open ? "active" : "not_active",
                    !dropdownMenu && "dropdown-menu_active"
                )}
            >
                <WrapperScroll className="absolute overflow-y-auto w-full h-full px-6">
                    <div className="grid mb-4">
                        {homeMenu.map((item, index) => (
                            <NeedLogin
                                key={index}
                                login={item.href === "/" ? false : !accessToken}
                                icon={<item.Icon size="1.8em" className={activeMenu(item.href)} />}
                                title={item.title}
                                titleClassName={clsx("cursor-pointer text-lg mb-0", activeMenu(item.href))}
                                className="group py-2"
                                Heading={Heading5}
                                onClick={() => handlePushPage(item.href)}
                            />
                        ))}
                    </div>
                    <Heading5 title="Âm nhạc" className="uppercase text-[#dfe6eb] my-4" />
                    <div className="grid my-4">
                        {musicMenu.map((item, index) => (
                            <NeedLogin
                                key={index}
                                login={!accessToken}
                                icon={<item.Icon size="1.8em" className={activeMenu(item.href)} />}
                                title={item.title}
                                titleClassName={clsx("cursor-pointer text-lg", activeMenu(item.href))}
                                className="group py-2"
                                Heading={Heading5}
                                onClick={() => handlePushPage(item.href)}
                            />
                        ))}
                    </div>
                    <Heading5 title="Danh sách playlist" className="uppercase text-[#dfe6eb] my-4" />
                    <PlaylistsAlbums />
                </WrapperScroll>
            </div>
            {open && <BeforeApter className="z-20 bg-[#00000061]" onClick={() => setOpen(false)} />}
        </div>
    );
};
