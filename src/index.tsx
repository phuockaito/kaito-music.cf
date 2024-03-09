import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

import "./styles/index.css";

import moment from "moment";
import "moment/locale/vi";

import { App } from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { UseContextProvider } from "contexts/use-context-provider";
import React from "react";
moment.locale("vi");

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <UseContextProvider>
                <App />
                <Analytics />
            </UseContextProvider>
        </Provider>
    </React.StrictMode>
);
