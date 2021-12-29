import React from "react";
import { Button, Modal, Form, Input } from "antd";

import { Playlist } from "layouts";
import { UsePlaylist } from "hooks";

import { MdCreateNewFolder } from "react-icons/md";
import { Heading3 } from "elements";

export const ModalAddListMusic = ({ _id }: any) => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    return (
        <>
            <ModalCreatePlaylist
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                _id_music={_id}
            />
            <div className="flex">
                <Button
                    type="primary"
                    icon={<MdCreateNewFolder className="inline-block mr-2" />}
                    onClick={() => setIsModalVisible(true)}
                >
                    Tạo playlist mới
                </Button>
            </div>
            <Playlist _id_music={_id} className="max-h-64 gap-y- mt-4" />
        </>
    );
};

interface ModalCreatePlaylistProps {
    isModalVisible: boolean;
    setIsModalVisible: (e: any) => void;
    _id_music?: string;
}
const ModalCreatePlaylist = ({ isModalVisible, setIsModalVisible, _id_music }: ModalCreatePlaylistProps) => {
    const { handleCreatePlaylist, loadingCreatePlaylist, resultPlayList } = UsePlaylist();
    const { data } = resultPlayList;
    const [createPlaylistForm] = Form.useForm();

    const onSubmitCreatePlaylist = (e: any) => {
        handleCreatePlaylist({ idMusic: _id_music, nameList: e.nameList.trim() });
    };
    React.useEffect(() => {
        setIsModalVisible(false);
        createPlaylistForm.resetFields(["nameList"]);
    }, [data.length]);
    return (
        <Modal
            title={<Heading3 title="Tạo playlist mới" className="text-white" />}
            visible={isModalVisible}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
            centered
            className="group__modal overflow-hidden"
            footer={[
                <Form onFinish={onSubmitCreatePlaylist} form={createPlaylistForm}>
                    <Button key="back" onClick={() => setIsModalVisible(false)}>
                        Hủy
                    </Button>
                    <Button key="submit" htmlType="submit" type="primary" loading={loadingCreatePlaylist}>
                        Tạo mới
                    </Button>
                </Form>,
            ]}
        >
            <Form form={createPlaylistForm}>
                <Form.Item
                    name="nameList"
                    rules={[
                        {
                            required: true,
                            message: "Nhập tên playlist!",
                            whitespace: true,
                            type: "string",
                        },
                        {
                            min: 1,
                            max: 30,
                            message: "playlist quá dài!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input placeholder="Nhập tên playlist tạo mới!" className="h-[35px]" />
                </Form.Item>
            </Form>
        </Modal>
    );
};
