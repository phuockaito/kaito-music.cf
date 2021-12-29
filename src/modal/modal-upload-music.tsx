import React from "react";
import { Form, Input, Button, Upload } from "antd";

import { Image } from "layouts";
import { Heading6 } from "elements";

import { UseUploadMusic } from "hooks";

import { BsMic } from "react-icons/bs";
import { UploadOutlined } from "@ant-design/icons";
import { BsMusicNoteList } from "react-icons/bs";
import { BsMusicPlayerFill } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";

export const ModalUploadMusic = () => {
    const [form] = Form.useForm();
    const {
        handleUploadMusicSource,
        handleUploadMusicImage,
        handlePostUploadMusic,
        loadingUploadMusic,
        statusUploadMusic,
        others,
        newImage,
        newAudio,
    } = UseUploadMusic();

    React.useEffect(() => {
        if (statusUploadMusic === "upload") form.resetFields();
    }, [form, statusUploadMusic]);

    React.useEffect(() => {
        if (others) {
            form.setFieldsValue({
                name_music: others.name_music,
                name_singer: others.name_singer,
                category: others.category,
                link_mv: `https://youtu.be/${others.link_mv}`,
            });
        }
    }, [form, others]);

    return (
        <Form onFinish={handlePostUploadMusic} form={form}>
            <Heading6 title="Tên bài hát" className="mb-2 text-white" />
            <Form.Item
                name="name_music"
                rules={[
                    {
                        required: true,
                        message: "Nhập tên bài hát",
                        whitespace: true,
                        type: "string",
                    },
                    {
                        min: 1,
                        max: 40,
                        message: "Vui lòng nhập đúng tên bài hát!",
                    },
                ]}
            >
                <Input
                    prefix={<BsMusicNoteList className="icon-input" />}
                    placeholder="Nhập tên bài hát"
                    className="h-[35px]"
                />
            </Form.Item>
            <Heading6 title="Tên nghệ sĩ" className="mb-2 text-white" />
            <Form.Item
                name="name_singer"
                rules={[
                    {
                        required: true,
                        message: "Nhập tên nghệ sĩ",
                        whitespace: true,
                        type: "string",
                    },
                    {
                        min: 1,
                        max: 30,
                        message: "Vui lòng nhập đúng tên nghệ sĩ!",
                    },
                ]}
            >
                <Input prefix={<BsMic className="icon-input" />} placeholder="Nghệ sĩ" className="h-[35px]" />
            </Form.Item>
            <Heading6 title="Tên thể loại" className="mb-2 text-white" />
            <Form.Item
                name="category"
                rules={[
                    {
                        required: true,
                        message: "Nhập tên thể loại",
                        whitespace: true,
                        type: "string",
                    },
                    {
                        min: 1,
                        max: 50,
                        message: "Vui lòng nhập đúng tên thể loại!",
                    },
                ]}
            >
                <Input
                    prefix={<BsMusicPlayerFill className="icon-input" />}
                    placeholder="Thể loại"
                    className="h-[35px]"
                />
            </Form.Item>
            <Heading6 title="Link Youtube" className="mb-2 text-white" />
            <Form.Item
                name="link_mv"
                rules={[
                    {
                        required: true,
                        message: "Nhập Link Youtube",
                        whitespace: true,
                        type: "string",
                    },
                    {
                        min: 1,
                        max: 100,
                        message: "Vui lòng nhập đúng Link Youtube!",
                    },
                ]}
            >
                <Input
                    prefix={<FiYoutube className="icon-input" />}
                    placeholder="https://youtu.be/FN7ALfpGxiI"
                    className="h-[35px]"
                />
            </Form.Item>
            <Form.Item
                name="src_music"
                rules={[
                    {
                        required: !others,
                        message: "Vui lòng chọn một bài hát tải lên!",
                    },
                ]}
                getValueFromEvent={handleUploadMusicSource}
                valuePropName="fileList"
            >
                <Upload maxCount={1} accept="audio/mpeg" listType="picture">
                    <Button
                        style={{ backgroundColor: "#ff3465", border: "1px solid #ff3465", color: "#ffff" }}
                        icon={<UploadOutlined />}
                    >
                        {others ? "Đổi bài hát" : "Click chọn bài hát"}
                    </Button>
                </Upload>
            </Form.Item>
            {!newAudio && others && (
                <Heading6 title={`Bài hát: ${others?.name_music}`} className="text-[#1890ff] mb-4" />
            )}
            <Form.Item
                name="image_music"
                valuePropName="fileList"
                rules={[{ required: !others, message: "Vui lòng chọn một tấm ảnh cho bài hát!" }]}
                getValueFromEvent={handleUploadMusicImage}
            >
                <Upload maxCount={1} accept=".jpg, .jpeg, .png" listType="picture" onChange={handleUploadMusicImage}>
                    <Button
                        style={{ backgroundColor: "#ff3465", border: "1px solid #ff3465", color: "#ffff" }}
                        icon={<UploadOutlined />}
                    >
                        {others ? "Đổi đổi ảnh" : " Click chọn poster"}
                    </Button>
                </Upload>
            </Form.Item>
            {!newImage && others && <Image src={others.image_music} className="w-12 h-12 my-4 ml-2" />}
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full"
                    style={{ height: "35px", marginTop: "10px" }}
                    loading={loadingUploadMusic}
                >
                    {others ? "Cập nhật" : " Tải nhạc lên"}
                </Button>
            </Form.Item>
        </Form>
    );
};
