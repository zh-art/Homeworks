import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FirstApp from "./firstApp.jsx";
import { Challenge } from "./Challenge.jsx";
import { ComponentApp } from "./ComponentApp.jsx";
import { Father } from "./Father.jsx";

// eslint-disable-next-line react-refresh/only-export-components
function MainApp() {
  //Esta función solo se exporta en runtime, puesto que está en el main, el eslint es para evitar que aparezca el error
  return <h1>Hola Mundo c:</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
    <App tittle="Im Juan Bohorquez - Daaz" />
    <ComponentApp />
    <Father />
    <FirstApp value={0} />
    <Challenge />
  </React.StrictMode>
);
