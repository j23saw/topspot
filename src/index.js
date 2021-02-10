import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as d3 from "d3-dsv";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

fetch("	https://spotifycharts.com/regional/us/daily/latest/download")
  .then((response) => response.text())
  .then((data) => {
    let string =
      ',,,"Note that these figures are generated using a formula that protects against any artificial inflation of chart positions.",\n';
    data = data.replace(string, "");
    console.table(d3.csvParse(data));
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
