import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodoState from "./Context/TodoContext/TodoState";

ReactDOM.render(
  <React.StrictMode>
    <TodoState>
      <App />
    </TodoState>
  </React.StrictMode>,
  document.getElementById("root")
);
