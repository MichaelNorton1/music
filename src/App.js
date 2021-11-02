import logo from "./logo.svg";
import "./App.css";
import SearchBar from "../src/components/SearchBar.js";
import DragArea from "../src/components/DragArea";
import { useState } from "react";
function App() {
  const [setlist, setSetlist] = useState("");
  console.log(setlist);
  return (
    <div className="App">
      <SearchBar setSetlist={setSetlist}></SearchBar>
      <DragArea></DragArea>
    </div>
  );
}

export default App;
