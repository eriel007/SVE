import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "../src/routes/routes";
import AdministradorProvider from "./providers/AdministradorProvider";
import ClienteProvider from "./providers/ClienteProvider";
import { SessionContextProvider } from "./context/SessionProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider>
      <AdministradorProvider>
        <ClienteProvider>
          <RouterProvider router={routes} />
        </ClienteProvider>
      </AdministradorProvider>
    </SessionContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
