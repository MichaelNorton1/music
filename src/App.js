import logo from "./logo.svg";
import "./App.css";
import SearchBar from "../src/components/SearchBar.js";
import DragArea from "../src/components/DragArea";
import { useState } from "react";
function App() {
  const [picture, setPicture] = useState("");
  console.log(picture);
  return (
    <div className="App">
      <SearchBar setPicture={setPicture}></SearchBar>
      <DragArea></DragArea>
    </div>
  );
}

export default App;
