import clsx from "clsx";
import { UseMusic } from "hooks";

import { UseContextControllers } from "contexts";
import { Search } from "components";
import { BeforeApter } from "layouts";

import { FaAngleDoubleDown } from "react-icons/fa";
interface TopControlProps {
    SrcMusic: string;
}

export const TopControl = ({ SrcMusic }: TopControlProps) => {
    const { handleOnDropdownMusic, dropdownMusic } = UseMusic();
    const { openSearch, setOpenSearch } = UseContextControllers();

    return (
        <div className="flex justify-between">
            <div className="group_music_control__search">
                <Search setOpen={setOpenSearch} open={openSearch} className="z-50" />
                {openSearch && <BeforeApter className="z-40" onClick={() => setOpenSearch(false)} />}
            </div>
            <div
                className={clsx(
                    "group_music_control__dropdown transition-ease-in-out fixed p-2 bg-[rgba(33,33,42,255)] rounded-sm",
                    !dropdownMusic && SrcMusic ? "bottom-24 opacity-100" : "-bottom-full opacity-0",
                    openSearch && "active-hidden"
                )}
                onClick={() => handleOnDropdownMusic(true)}
            >
                <FaAngleDoubleDown
                    className="sticky bottom-0 transition-ease-in-out text-white cursor-pointer transform hover:scale-125 inline-block"
                    size="1.2rem"
                />
            </div>
        </div>
    );
};
