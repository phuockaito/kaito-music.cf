import { Form, Input, Button } from "antd";

import { UseAccount, UseModal } from "hooks";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { AiOutlineMail } from "react-icons/ai";
import { ModalTypeEnum } from "const";

export const ModalRegister = () => {
    const { handlePostRegister, loading } = UseAccount();
    const { toggle } = UseModal();

    return (
        <Form onFinish={handlePostRegister}>
            <Form.Item
                name="userName"
                rules={[
                    {
                        required: true,
                        message: "Nhập đầy đủ tên bạn!",
                        whitespace: true,
                        type: "string",
                    },
                    {
                        min: 1,
                        max: 30,
                        message: "Vui lòng nhập đúng tên của bạn!",
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="icon-input" />}
                    placeholder="Tên của bạn"
                    className="h-[35px]"
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        max: 50,
                        message: "E-mail quá dài!",
                    },
                    {
                        type: "email",
                        message: "Đầu vào không hợp lệ E-mail!",
                    },
                    {
                        required: true,
                        message: "Vui lòng nhập đúng E-mail!",
                    },
                ]}
            >
                <Input prefix={<AiOutlineMail className="icon-input" />} placeholder="Email" className="h-[35px]" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        min: 8,
                        message: "Mật khẩu quá ngắn ít nhất 8 ký tự!",
                    },
                    {
                        required: true,
                        type: "string",
                        message: "Vui lòng nhập mật khẩu của bạn!",
                    },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="icon-input" />}
                    placeholder="Mật khẩu"
                    className="h-[35px]"
                />
            </Form.Item>
            <Form.Item
                name="confirm"
                dependencies={["password"]}
                rules={[
                    {
                        required: true,
                        message: "Vui lòng xác nhận mật khẩu của bạn!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error("Hai mật khẩu bạn đã nhập không khớp!"));
                        },
                    }),
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="icon-input" />}
                    placeholder="Xác nhận mật khẩu"
                    className="h-[35px]"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full"
                    style={{ height: "35px" }}
                    loading={loading}
                >
                    Đăng ký
                </Button>
            </Form.Item>
            <Form.Item>
                <Button
                    type="text"
                    danger
                    className="flex m-auto"
                    style={{ fontSize: "16px", display: "block" }}
                    onClick={() => {
                        toggle({
                            type: ModalTypeEnum.LOGIN,
                            title: "Đăng nhập",
                        });
                    }}
                >
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    );
};
