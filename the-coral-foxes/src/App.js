import React, {useState} from "react"
import "./App.css";
import Gamepage from "./pages/Gamepage";
import Frontpage from "./pages/FrontPage"

function App() {
  const [currentPage, setCurrentPage] = useState("FrontPage");
  
  if (currentPage === "FrontPage"){
    return (
      <div className="App">
        <Frontpage onStartGame={() => setCurrentPage("Game")}/>
      </div>
    );
  }
  return <Gamepage/>
  
}

export default App;
