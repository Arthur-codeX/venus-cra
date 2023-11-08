import React from "react";
import ReactDOM from "react-dom/client"; // DOM -> Document object

// import OtherFiles from "./OtherFiles/Comp";

// import Props from "./Props/MainComponent";

// import ParentEffect from "./4:UseRef/Parent";

// import ManualRouting from "./ManualRouting";
import BOTAPP from "./BOTAPP";

import "./bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BOTAPP />
  </React.StrictMode>
);
