import React from "react";
import clsx from "clsx";
import { Input, Form } from "antd";

import { updateCommentType } from "type";

import { UseComment } from "hooks";

import "./style.css";

interface FormCommentProps {
    id_music: string;
    editComment?: updateCommentType | undefined;
    onSetEditComment: (e: any) => void;
}
const { TextArea } = Input;

export const FormComment = ({ id_music, editComment, onSetEditComment }: FormCommentProps) => {
    const { handleOnAddComment, loadingComments, handleUpdateComment } = UseComment();
    const [lengthComment, setLengthComment] = React.useState("");
    const [form] = Form.useForm();

    React.useEffect(() => {
        if (!loadingComments) {
            form.resetFields();
            setLengthComment("");
            onSetEditComment("");
        }
    }, [form, loadingComments, onSetEditComment]);

    React.useEffect(() => {
        if (editComment) {
            form.setFieldsValue({
                content: editComment.content,
            });
            setLengthComment(editComment.content.length.toString());
        }
    }, [editComment, form]);

    const onFinishSubmit = ({ content }: any) => {
        if (editComment) handleUpdateComment({ _id: editComment._id, content });
        else handleOnAddComment({ content, id_music });
    };

    return (
        <div className="form__comment">
            <Form onFinish={onFinishSubmit} form={form}>
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
                        {editComment ? "Lưu lại" : "Đăng"}
                    </button>
                </div>
            </Form>
        </div>
    );
};
