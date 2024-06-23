import React from "react";
import ReactDOM from "react-dom/client";
import Foot from "./components/Foot.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router/RouterApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterApp />
      <Foot />
    </BrowserRouter>
  </React.StrictMode>
);
