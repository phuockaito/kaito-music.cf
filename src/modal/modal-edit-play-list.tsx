import React from "react";
import { Button, Form, Input, Modal } from "antd";

import { UseModal, UsePlaylist } from "hooks";
import { Heading3 } from "elements";
import { ModalTypeEnum } from "const";

export const ModalEditPlayList = ({ others, title, _id }: any) => {
    const { handleEditPlaylistName, loadingCreatePlaylist } = UsePlaylist();
    const [editPlaylistContent] = Form.useForm();
    const { toggle } = UseModal();

    const editPlaylistForm = async (value: any) => {
        if (value.nameList === others?.nameList) {
            toggle({
                title: "",
                type: ModalTypeEnum.NULL,
            });
        } else {
            const actionResult = await handleEditPlaylistName({
                _id,
                nameList: value.nameList,
            });
            if (actionResult) {
                toggle({
                    title: "",
                    type: ModalTypeEnum.NULL,
                });
            }
        }
    };

    React.useEffect(() => {
        editPlaylistContent.setFieldsValue(others);
    }, [editPlaylistContent, others]);

    return (
        <Modal
            title={title && <Heading3 title={title} className="text-white" />}
            visible={true}
            onOk={toggle}
            onCancel={toggle}
            centered
            className="group__modal overflow-hidden"
            footer={[
                <Form onFinish={editPlaylistForm} form={editPlaylistContent}>
                    <Button key="back" onClick={toggle}>
                        Hủy
                    </Button>
                    <Button key="submit" htmlType="submit" type="primary" loading={loadingCreatePlaylist}>
                        Lưu
                    </Button>
                </Form>,
            ]}
        >
            <Form onFinish={editPlaylistForm} form={editPlaylistContent}>
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
                    <Input placeholder="Tên playlist mới!" className="h-[35px]" />
                </Form.Item>
            </Form>
        </Modal>
    );
};
