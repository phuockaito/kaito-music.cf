import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { UseAccount } from "hooks";
import Page from "./index";
import { handleGetHashCode } from "const";

const xs = handleGetHashCode();
const RouterControllers = () => {
    const { accessToken } = UseAccount();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!xs && !accessToken) navigate("/");
    }, [accessToken, navigate]);

    return (
        <Routes>
            {Page.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    );
};
export default RouterControllers;
