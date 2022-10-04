import React from "react";
import clsx from "clsx";
import { Input, Form } from "antd";
import { FiSend } from "react-icons/fi";
import styled from "styled-components";

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
                <div className="flex items-end w-full gap-3">
                    <Form.Item name="content" rules={[{ required: true, message: "" }]}>
                        <StyleDTextArea
                            bordered={false}
                            placeholder="Thêm bình luận..."
                            maxLength={300}
                            showCount={true}
                            autoSize={{
                                minRows: 1,
                                maxRows: 2,
                            }}
                            onChange={(e) => setLengthComment(e.target.value.trim())}
                        />
                    </Form.Item>
                    <button
                        disabled={lengthComment ? false : true}
                        className={clsx(
                            "w-[35px] h-[35px] flex items-center justify-center rounded-[0.35rem] cursor-pointer",
                            lengthComment ? "bg-[#ffff]" : "bg-[#717588]"
                        )}
                    >
                        <FiSend />
                    </button>
                </div>
            </Form>
        </div>
    );
};

const StyleDTextArea = styled(TextArea)`
    textarea {
        height: 35px !important;
    }
`;
