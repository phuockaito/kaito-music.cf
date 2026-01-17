import React from "react";
import clsx from "clsx";

import { UseAccount } from "hooks";
import { BiLoader } from "react-icons/bi";
import { useGoogleLogin } from "@react-oauth/google";

interface LoginGoogleProps {
    className?: string;
    elements: React.ReactNode;
}

export const LoginGoogle = ({ elements, className }: LoginGoogleProps) => {
    const { responseGoogle, loadingGoogle } = UseAccount();
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => responseGoogle(tokenResponse),
    });

    return (
        <p onClick={() => login()}>
            {loadingGoogle ? (
                <BiLoader className="m-auto text-white animate-spin" size="1.5em" />
            ) : (
                <div className={clsx("relative", className)}>{elements}</div>
            )}
        </p>
    );
};
