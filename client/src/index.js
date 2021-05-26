import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RootProvider } from "./RootProvider";
ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
