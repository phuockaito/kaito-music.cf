import { Form, Input, Button } from "antd";

import { UseAccount, UseModal } from "hooks";
import { LoginGoogle } from "layouts";
import { Heading6 } from "elements";

import { FcGoogle } from "react-icons/fc";
import { LockOutlined } from "@ant-design/icons";
import { AiOutlineMail } from "react-icons/ai";
import { ModalTypeEnum } from "const";

export const ModalLogin = () => {
    const { handlePostLogin, loading } = UseAccount();
    const { toggle } = UseModal();

    return (
        <Form initialValues={{ remember: true }} onFinish={handlePostLogin} autoComplete="off">
            <Form.Item
                name="email"
                rules={[
                    {
                        type: "email",
                        message: "E-mail không hợp lệ !",
                    },
                    {
                        required: true,
                        message: "Vui lòng nhập đúng E-mail !",
                    },
                ]}
                hasFeedback
            >
                <Input prefix={<AiOutlineMail className="icon-input" />} placeholder="Email" className="h-[35px]" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        type: "string",
                        message: "Vui lòng nhập mật khẩu của bạn !",
                    },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="icon-input" />}
                    placeholder="Mật khẩu"
                    className="h-[35px] bg-[#3e3f44]"
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
                    Đăng nhập
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
                            type: ModalTypeEnum.REGISTER,
                            title: "Đăng ký",
                        });
                    }}
                >
                    Đăng ký
                </Button>
            </Form.Item>
            <LoginGoogle
                className="cursor-pointer flex"
                elements={
                    <div className="m-auto flex items-center space-x-2">
                        <FcGoogle size="1.7em" />
                        <Heading6 title="Đăng nhập bằng google" className="text-[#a5a6c4]" />
                    </div>
                }
            />
        </Form>
    );
};
