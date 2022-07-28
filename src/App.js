import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Scrollbars from "react-custom-scrollbars-2";
import { blue } from "@mui/material/colors";
import Headbar from "./components/Headbar";
import Footbar from "./components/Footbar";
import Navbar from "./components/Navbar";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import Part5 from "./components/Part5";
function App() {
  return (
    <div className="App">
      <div className="Side">
        <Headbar />
        <Sidebar />
        <Footbar />
      </div>
      <div className="BodyPart">
        <Navbar />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part5 />
      </div>
    </div>
  );
}

export default App;
