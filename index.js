import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './src/context'
import App from "./src/App/";
import { GlobalStyles } from "./src/global-styles";

ReactDOM.render(
    <ContextProvider>
        <Router>
            <GlobalStyles />
            <App />
        </Router>
    </ContextProvider>
, document.getElementById("root"));