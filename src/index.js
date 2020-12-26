import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GradientContextProvider from "./context/GradientsContext";

ReactDOM.render(
  <React.StrictMode>
    <GradientContextProvider>
    <App />
    </GradientContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

//si on utilise valeurs par default du createContext pas besoin d'importer
//GradientContextProvider et qu'il enveloppe <App /> 
/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
