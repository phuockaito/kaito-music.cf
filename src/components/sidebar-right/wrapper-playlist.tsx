import clsx from "clsx";
import { Tabs } from "antd";

import { UsePlaylist } from "hooks";

import { BeforeApter, Playlist } from "layouts";
import { Heading6, ListenedRecently, WaitingList } from "elements";

import { MdMoreHoriz } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";

import "./style.css";
const { TabPane } = Tabs;

export const WrapperPlaylist = () => {
    const { isOpen, handleClosePlaylist } = UsePlaylist();

    return (
        <div className="z-80">
            <div
                className={clsx(
                    "transition-ease-in-out flex fixed top-0 h-full bg-[rgba(33,33,42,255)] max-w-md w-full z-70",
                    isOpen ? "right-0" : "-right-full"
                )}
            >
                <div className="w-full h-full py-4">
                    <HiOutlineArrowLeft
                        className="group__playlist_icon_close hidden text-white cursor-pointer rounded-full ml-4"
                        size="1.5em"
                        onClick={() => handleClosePlaylist()}
                    />
                    <Tabs
                        defaultActiveKey="1"
                        style={{ height: "100%" }}
                        tabBarStyle={{ margin: "0px 16px" }}
                        moreIcon={<MdMoreHoriz className="text-white " size="1.5em" />}
                    >
                        <TabPane
                            style={{ height: "100%", padding: "20px" }}
                            tab={<Heading6 title="Danh sách phát" className="text-white mb-0" />}
                            key="1"
                        >
                            <WaitingList />
                        </TabPane>
                        <TabPane
                            style={{ height: "100%", padding: "20px" }}
                            tab={<Heading6 className="text-white mb-0" title="Nghe gần đây" />}
                            key="2"
                        >
                            <ListenedRecently className="grid-cols-1 gap-y-2" />
                        </TabPane>
                        <TabPane
                            style={{ height: "100%", padding: "20px" }}
                            tab={<Heading6 title="Danh sách playlist" className="text-white mb-0" />}
                            key="3"
                        >
                            <Playlist isEditDelete className="h-full pr-5" />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
            {isOpen && <BeforeApter className="z-60 bg-[#00000061]" onClick={() => handleClosePlaylist()} />}
        </div>
    );
};
