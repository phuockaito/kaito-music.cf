import React from "react";
import ReactDOM from "react-dom";

import "./tailwind.css";
import "antd/dist/antd.css";
import "./index.css";

import moment from "moment";
import "moment/locale/vi";

import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { UseContextProvider } from "contexts/use-context-provider";
moment.locale("vi");

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <UseContextProvider>
                <Router>
                    <App />
                </Router>
            </UseContextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
