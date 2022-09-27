import React from "react";
import { Tooltip, Pagination, Popconfirm } from "antd";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import { UseUploadMusic, UseModal } from "hooks";

import { ListLoading, ItemList } from "layouts";
import { Heading3, Heading4, Heading6 } from "elements";

import { FileSearchOutlined } from "@ant-design/icons";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import { ModalTypeEnum } from "const";
import { MusicType } from "type";
import "./style.css";

const UploadMusic = ({ location }: any) => {
    const { toggle } = UseModal();
    const page = Number(queryString.parse(location.search).page) || 1;
    const history = useHistory();
    const { data, loading, error, pagination, handleGetUploadMusic, handleDeleteMusic } = UseUploadMusic();
    // useEffect
    React.useEffect(() => {
        handleGetUploadMusic({ _limit: 18, _page: page });
    }, [error, handleGetUploadMusic, page]);
    // function
    const onChangePage = (page: number) => {
        const params = queryString.stringify({ page: page });
        const url = `/upload-music?${params}`;
        history.push(url);
    };
    return loading ? (
        <ListLoading items={24} className="grid gap-3 grid-template-columns-3" />
    ) : (
        <>
            {data.length ? (
                <div className="group__upload__music">
                    <div>
                        <Heading3 title="Danh Sách Tải Lên" className="mb-4 text-white" />
                        <div className="grid gap-3 grid-template-columns-3">
                            {data.map((item: MusicType, index: number) => (
                                <ItemList
                                    account_favorite={item.account_favorite}
                                    key={item._id}
                                    timeFormat={item.time_format}
                                    item={item}
                                    nameMusic={item.name_music}
                                    image={item.image_music}
                                    nameSinger={item.name_singer}
                                    _id={item._id}
                                    src_music={item.src_music}
                                    data={data}
                                    index={index}
                                    childrenPros={
                                        <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100">
                                            <Tooltip
                                                placement="bottom"
                                                title={<p className="m-0 text-white">Chỉnh sửa</p>}
                                            >
                                                <FiEdit
                                                    size="1.3rem"
                                                    className="text-white cursor-pointer hover:text-[#ff3465]"
                                                    onClick={() =>
                                                        toggle({
                                                            type: ModalTypeEnum.EDIT_UPLOAD_MUSIC,
                                                            title: "Chỉnh sửa bài hát",
                                                            others: item,
                                                        })
                                                    }
                                                />
                                            </Tooltip>
                                            <Popconfirm
                                                title={
                                                    <Heading6
                                                        title={`Bài hát "${item.name_music}" xóa vỉnh viễn bạn trắc không ?`}
                                                        className="text-white"
                                                    />
                                                }
                                                onConfirm={() => handleDeleteMusic({ _id: item._id })}
                                                okText="Có"
                                                cancelText="Không"
                                                placement="bottomRight"
                                            >
                                                <Tooltip
                                                    placement="bottom"
                                                    title={<p className="m-0 text-white">Xóa bài hát</p>}
                                                >
                                                    <AiFillDelete size="1.3rem" className="text-white cursor-pointer" />
                                                </Tooltip>
                                            </Popconfirm>
                                        </div>
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div className="group_pagination">
                        <Pagination
                            onChange={onChangePage}
                            total={pagination._total}
                            defaultPageSize={18}
                            current={page}
                            defaultCurrent={1}
                        />
                    </div>
                </div>
            ) : (
                <div className="absolute text-center left-2/4 top-2/4 transform-50-center">
                    <FileSearchOutlined style={{ fontSize: "1.5rem", color: "white", marginBottom: "8px" }} />
                    <Heading4 title="Danh Sách Tải Lên Trống!" className="text-white" />
                </div>
            )}
        </>
    );
};

export default UploadMusic;
