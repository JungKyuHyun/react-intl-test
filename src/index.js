import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IntlProvider } from "react-intl";
import { en } from "./locale/en";

ReactDOM.render(
    <IntlProvider locale="en" messages={en}>
        <App />
    </IntlProvider>,
    document.getElementById("root")
);
