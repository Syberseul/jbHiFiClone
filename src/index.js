import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { GlobalStyle } from "./style";

ReactDOM.render(
  <div>
    <App />
    <GlobalStyle />
  </div>,
  document.getElementById("root")
);
