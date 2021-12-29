import moment from "moment";
import { Dropdown } from "antd";

import { UseAccount, UseComment } from "hooks";

import { BsThreeDots } from "react-icons/bs";
import { RiReplyFill } from "react-icons/ri";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GoReport } from "react-icons/go";

import { Comment } from "type";

import { Heading6, Heading5, Heading4 } from "elements";
import { Image } from "layouts";

export const ListComments = (item: Comment) => {
    const { resultAccount, accessToken } = UseAccount();
    const { handleDeleteComment } = UseComment();

    const menu = (
        <div className="bg-[#2f2f3a] py-4 rounded-sm text-left min-w-[15em]">
            {accessToken && (
                <>
                    {item.id_account === resultAccount.data._id && (
                        <>
                            <div
                                className="flex content-center space-x-4 py-2 px-4 cursor-pointer hover:bg-[rgba(33,33,42,255)]"
                                onClick={() => handleDeleteComment({ _id: item._id })}
                            >
                                <AiFillDelete size="1.3rem" className="text-white" />
                                <h1 className="text-white">Xóa</h1>
                            </div>
                            <div className="flex content-center space-x-4 py-2 px-4 cursor-pointer hover:bg-[rgba(33,33,42,255)]">
                                <AiFillEdit size="1.3rem" className="text-white" />
                                <h1 className="text-white">Chỉnh sửa</h1>
                            </div>
                        </>
                    )}
                </>
            )}
            {item.id_account !== resultAccount.data._id && (
                <div className="flex content-center space-x-4 py-2 px-4 cursor-pointer hover:bg-[rgba(33,33,42,255)]">
                    <GoReport size="1.3rem" className="text-white" />
                    <h1 className="text-white">Báo cáo</h1>
                </div>
            )}
        </div>
    );

    return (
        <div className="flex space-x-4 mb-4 group">
            <div>
                <Image src={item.account.image} className="w-10 h-10" />
            </div>
            <div className="flex-1">
                <Heading4 title={item.account.user_name} className="text-white font-semibold" />
                <div className="flex space-x-2 justify-between">
                    <div>
                        <Heading5 className="text-[#7f7f9c] break-all my-2" title={item.content} />
                        <div className="flex items-center space-x-4">
                            <Heading6 className="text-[#737678] mb-0" title={moment(item.createdAt).fromNow()} />
                            <RiReplyFill className="text-white text-sm cursor-pointer" />
                        </div>
                    </div>
                    <div className="group-hover:opacity-100 opacity-0 cursor-pointer">
                        <Dropdown overlay={menu} placement="bottomRight">
                            <BsThreeDots className="text-white text-xl" />
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};
