import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodoState from "./Context/TodoContext/TodoState";
import PaginationState from "./Context/PaginationContext/PaginationState";

ReactDOM.render(
  <React.StrictMode>
    <TodoState>
      <PaginationState>
        <App />
      </PaginationState>
    </TodoState>
  </React.StrictMode>,
  document.getElementById("root")
);
