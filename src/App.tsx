import * as React from "react";
import logo from "./assets/react-logo.svg";

interface AppProps {
  bundler: string;
}

const App = ({ bundler }: AppProps): JSX.Element => (
  <div>
    <h1>This app builded with {bundler}</h1>
    <img src={logo} />
  </div>
);

export default App;
