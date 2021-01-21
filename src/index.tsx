import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <StyledGlobal />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
