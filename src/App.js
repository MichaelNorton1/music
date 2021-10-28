import logo from "./logo.svg";
import "./App.css";
import SearchBar from "../src/components/SearchBar.js";
import DragArea from "../src/components/DragArea";
function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <DragArea></DragArea>
    </div>
  );
}

export default App;
