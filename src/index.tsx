import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

const { BUNDLER } = import.meta.env; // get env variables

ReactDOM.render(<App bundler={BUNDLER} />, document.getElementById("root"));
