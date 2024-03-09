import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import { UseAccount } from "hooks";
import { UploadMusic, Avatar, Login, Notification } from "components";

import "./style.css";
interface ProfileUserProps {
    className?: string;
}
export const ProfileUser = ({ className }: ProfileUserProps) => {
    const { resultAccount, getProfileAPI, handleOnLogOut } = UseAccount();
    const navigate = useNavigate();

    React.useEffect(() => {
        getProfileAPI();
    }, [getProfileAPI]);

    const { accessToken, data } = resultAccount;

    return (
        <div className={clsx("group__profile grid grid-cols-1 gap-5 place-items-end", className)}>
            {accessToken ? (
                <div className="grid grid-cols-3 gap-5 group__profile_icon">
                    <UploadMusic />
                    <Notification />
                    <Avatar
                        {...data}
                        onClick={() => {
                            handleOnLogOut();
                            navigate("/");
                        }}
                    />
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
};
