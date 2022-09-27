import clsx from "clsx";
import { Link } from "react-router-dom";
import { UseAccount } from "hooks";
import { BeforeApter, Image } from "layouts";
import { ProfileUser, Search } from "components";
import { UseContextControllers } from "contexts";

import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import "./style.css";

export const Header = () => {
    const { openSearch, setOpenSearch, dropdownMenu, setDropdownMenu } = UseContextControllers();
    const { accessToken } = UseAccount();
    const IconDropdownMenu = dropdownMenu ? RiMenuFoldLine : RiMenuUnfoldLine;
    return (
        <>
            <div
                className={clsx(
                    "group__header transition-ease-in-out sticky top-0 grid grid-cols-3 p-6 bg-[rgba(33,33,42,255)] z-50 items-center",
                    openSearch && "active__search",
                    !accessToken && openSearch && "layout__not_account",
                    accessToken && "layout__columns_access_token"
                )}
            >
                <div className={clsx("group__header_logo flex items-center", openSearch && "active-hidden")}>
                    <IconDropdownMenu
                        className="text-white cursor-pointer drop__down-menu"
                        size="1.5em"
                        onClick={() => setDropdownMenu(!dropdownMenu)}
                    />
                    <Link to="/">
                        <Image
                            src="https://res.cloudinary.com/dycmdfgj3/image/upload/v1664261999/logo-website_vl7wul.png"
                            imageClassName="w-36 h-full"
                            className="ml-4"
                        />
                    </Link>
                </div>
                <Search setOpen={() => setOpenSearch(true)} open={openSearch} />
                <ProfileUser className={openSearch && "active-hidden"} />
            </div>
            {openSearch && <BeforeApter className="z-40 bg-[#00000061]" onClick={() => setOpenSearch(false)} />}
        </>
    );
};
