import { Badge, Tooltip } from "antd";

import { IoIosNotificationsOutline } from "react-icons/io";

export const Notification = () => {
    return (
        <Tooltip placement="bottomRight" title={<p className="text-white m-0">Thông báo</p>}>
            <Badge>
                <div className="group-Notification w-10 h-10 flex items-center justify-center p-2 border border-[#3e3f44] bg-[#3e3f44] rounded cursor-pointer">
                    <IoIosNotificationsOutline className=" text-white group-Notification__icon" size="1.5em" />
                </div>
            </Badge>
        </Tooltip>
    );
};
