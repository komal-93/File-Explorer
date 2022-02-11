import "./styles.css";
import Folder from "./Folder";
//import React from "react";
import explorer from "./data/explorer";

export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
