import React from "react";
import clsx from "clsx";
import { Input, Form } from "antd";

import { UseComment } from "hooks";

import "./style.css";

interface FormCommentProps {
    id_music: string;
}
const { TextArea } = Input;

export const FormComment = ({ id_music }: FormCommentProps) => {
    const { handleOnAddComment, loadingComments } = UseComment();
    const [lengthComment, setLengthComment] = React.useState("");
    const [form] = Form.useForm();

    React.useEffect(() => {
        if (!loadingComments) {
            form.resetFields();
            setLengthComment("");
        }
    }, [form, loadingComments]);

    return (
        <div className="form__comment">
            <Form onFinish={({ content }) => handleOnAddComment({ content, id_music })} form={form}>
                <div className="flex w-full items-end">
                    <Form.Item name="content" rules={[{ required: true, message: "" }]}>
                        <TextArea
                            placeholder="Thêm bình luận..."
                            maxLength={300}
                            showCount={true}
                            onChange={(e) => setLengthComment(e.target.value.trim())}
                        />
                    </Form.Item>
                    <button
                        disabled={lengthComment ? false : true}
                        className={clsx("ml-2", lengthComment ? "text-[#ff3465]" : "text-[#717588]")}
                    >
                        Đăng
                    </button>
                </div>
            </Form>
        </div>
    );
};
