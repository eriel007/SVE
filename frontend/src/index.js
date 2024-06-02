import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import routes from "../src/routes/routes";
//import CssBaseline from "@mui/material/CssBaseline";
//import Fuente from "./views/components/Fuente";
import { CandidatosContextProvider } from "./context/CandidatosProvider";
import { EleccionesContextProvider } from "./context/EleccionesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CandidatosContextProvider>
      <EleccionesContextProvider>
        <RouterProvider router={routes} />
      </EleccionesContextProvider>
    </CandidatosContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
