import React from "react";
import { Suspense } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import { UseAccount } from "hooks";
import Page from "./index";

const accessTokenLocal = localStorage.accessToken;

const RouterControllers = () => {
    const { accessToken } = UseAccount();
    const history = useHistory();

    React.useEffect(() => {
        if (!accessTokenLocal && !accessToken) history.push("/");
    }, [accessToken, history]);

    return (
        <Suspense fallback={<></>}>
            <Switch>
                {Page.map((item, index) => (
                    <Route key={index} path={item.path} exact={item.exact} component={item.component} />
                ))}
                <Redirect to="/" from="/" />
            </Switch>
        </Suspense>
    );
};
export default RouterControllers;
