import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import './App.css';

function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <div className="Map">
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
      <div>
        TopSpot
      </div>
    </div>
  );
}

export default App;
