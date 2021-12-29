import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router";

import { UseAccount } from "hooks";
import { UploadMusic, Avatar, Login, Notification } from "components";

import "./style.css";
interface ProfileUserProps {
    className?: string;
}
export const ProfileUser = ({ className }: ProfileUserProps) => {
    const { resultAccount, getProfileAPI, handleOnLogOut } = UseAccount();
    const history = useHistory();

    React.useEffect(() => {
        getProfileAPI();
    }, [getProfileAPI]);

    const { accessToken, data } = resultAccount;

    return (
        <div className={clsx("group__profile grid grid-cols-1 gap-5 place-items-end", className)}>
            {accessToken ? (
                <div className="group__profile_icon grid grid-cols-3 gap-5">
                    <UploadMusic />
                    <Notification />
                    <Avatar
                        {...data}
                        onClick={() => {
                            handleOnLogOut();
                            history.push("/");
                        }}
                    />
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
};
