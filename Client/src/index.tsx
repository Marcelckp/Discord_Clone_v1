import React from "react";
import App from "./App";
import { createRoot, Root } from "react-dom/client";

const element: JSX.Element = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const container: HTMLElement = document.querySelector("#root")!;
const root: Root = createRoot(container);
root.render(element);
