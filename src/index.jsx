import React from "react";
import ReactDOMClient from "react-dom/client";
import { AndroidLarge } from "./screens/AndroidLarge";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AndroidLarge />);
