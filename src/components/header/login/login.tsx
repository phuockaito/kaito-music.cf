import clsx from "clsx";

import { UseAccount } from "hooks";
import { NeedLogin } from "layouts";

import { FcGoogle } from "react-icons/fc";
import { VscLoading } from "react-icons/vsc";

import "./style.css";
interface LoginProps {
    titleClassName?: string;
}

export const Login = ({ titleClassName = "group-login__title" }: LoginProps) => {
    const { accessToken, loading } = UseAccount();

    return !accessToken ? (
        <>
            {loading ? (
                <VscLoading className="animate-spin w-8 h-8 text-white" />
            ) : (
                <NeedLogin
                    login
                    className="group-login flex items-center justify-center border border-[#3e3f44] bg-[#3e3f44] rounded cursor-pointer group p-2"
                    icon={<FcGoogle size="1.3em" className="group-login__icon" />}
                    title="Đăng nhập"
                    titleClassName={clsx("text-white text-center group-hover:text-[#ff3465]", titleClassName)}
                />
            )}
        </>
    ) : null;
};
