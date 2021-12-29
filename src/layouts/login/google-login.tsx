import React from "react";
import clsx from "clsx";

import { GoogleLogin } from "react-google-login";
import { UseAccount } from "hooks";
import { CLINT_ID_GOOGLE } from "const";
import { BiLoader } from "react-icons/bi";

interface LoginGoogleProps {
    className?: string;
    elements: React.ReactNode;
}

export const LoginGoogle = ({ elements, className }: LoginGoogleProps) => {
    const { responseGoogle, loadingGoogle } = UseAccount();
    return (
        <GoogleLogin
            className={clsx(className)}
            clientId={CLINT_ID_GOOGLE}
            onSuccess={responseGoogle}
            cookiePolicy={"single_host_origin"}
            icon={false}
            buttonText=""
            render={(renderProps) => (
                <>
                    {loadingGoogle ? (
                        <BiLoader className="animate-spin m-auto text-white" size="1.5em" />
                    ) : (
                        <div onClick={renderProps.onClick} className={clsx("relative", className)}>
                            {elements}
                        </div>
                    )}
                </>
            )}
        />
    );
};
