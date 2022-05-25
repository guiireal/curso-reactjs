import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterContextProvider } from "./contexts/CounterContext";
import { TitleColorContextProvider } from "./contexts/TitleColorContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
