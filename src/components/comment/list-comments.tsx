import moment from "moment";
import { Dropdown, message } from "antd";

import { UseAccount, UseComment } from "hooks";

import { BsThreeDots } from "react-icons/bs";
import { RiReplyFill } from "react-icons/ri";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GoReport } from "react-icons/go";

import { Heading6, Heading5, Heading4 } from "elements";
import { Image } from "layouts";

interface ListCommentsProps {
    id_account_comment: string;
    _id_comment: string;
    content: string;
    account_image: string;
    comment_user_name: string;
    createdAt: string;
    onSetEditComment: (comment: any) => void;
}

export const ListComments = ({
    id_account_comment,
    _id_comment,
    comment_user_name,
    account_image,
    createdAt,
    content,
    onSetEditComment,
}: ListCommentsProps) => {
    const { resultAccount, accessToken } = UseAccount();
    const { handleDeleteComment } = UseComment();
    const menu = (
        <div className="bg-[#2f2f3a] py-4 rounded-sm text-left min-w-[15em]">
            {accessToken && (
                <>
                    {id_account_comment === resultAccount.data._id && (
                        <>
                            <div
                                className="flex content-center space-x-4 py-2 px-4 cursor-pointer hover:bg-[rgba(33,33,42,255)]"
                                onClick={() => handleDeleteComment({ _id: _id_comment })}
                            >
                                <AiFillDelete size="1.3rem" className="text-white" />
                                <h1 className="text-white">Xóa</h1>
                            </div>
                            <div
                                className="flex content-center space-x-4 py-2 px-4 cursor-pointer hover:bg-[rgba(33,33,42,255)]"
                                onClick={() => onSetEditComment({ content, _id: _id_comment })}
                            >
                                <AiFillEdit size="1.3rem" className="text-white" />
                                <h1 className="text-white">Chỉnh sửa</h1>
                            </div>
                        </>
                    )}
                </>
            )}
            {id_account_comment !== resultAccount.data._id && (
                <div className="flex content-center space-x-4 py-2 px-4 hover:bg-[rgba(33,33,42,255)] cursor-not-allowed">
                    <GoReport size="1.3rem" className="text-white" />
                    <h1 className="text-white">Báo cáo</h1>
                </div>
            )}
        </div>
    );

    return (
        <div className="flex space-x-4 mb-4 group">
            <div>
                <Image src={account_image} className="w-10 h-10" />
            </div>
            <div className="flex-1">
                <Heading4 title={comment_user_name} className="text-white font-semibold" />
                <div className="flex space-x-2 justify-between">
                    <div>
                        <Heading5 className="text-[#7f7f9c] break-all my-2" title={content} />
                        <div className="flex items-center space-x-4">
                            <Heading6 className="text-[#737678] mb-0" title={moment(createdAt).fromNow()} />
                            <RiReplyFill className="text-white text-sm cursor-not-allowed" />
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
