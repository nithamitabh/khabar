import Navbar from "./components/Navbar";
import NewsBody from "./components/NewsBody";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div className="App">
      <Navbar setCategory = {setCategory}/>
      <NewsBody category = {category}/>
    </div>
  );
}

export default App;
