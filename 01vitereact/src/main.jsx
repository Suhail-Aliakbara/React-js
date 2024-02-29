import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// const element = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );
const anotherUser = "Chai aur code";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to Visit Google",
  anotherUser
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
