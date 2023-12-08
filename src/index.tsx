import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./styles/index.css";

import moment from "moment";
import "moment/locale/vi";

import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { UseContextProvider } from "contexts/use-context-provider";
moment.locale("vi");

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <Router>
            <UseContextProvider>
                <App />
                <Analytics />
                <SpeedInsights />
            </UseContextProvider>
        </Router>
    </Provider>
    // </React.StrictMode>
);
