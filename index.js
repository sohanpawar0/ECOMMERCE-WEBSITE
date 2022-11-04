import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
      <BrowserRouter>
     <React.StrictMode>
      <App />
     </React.StrictMode>
     </BrowserRouter>
  </AuthContextProvider>
  
);