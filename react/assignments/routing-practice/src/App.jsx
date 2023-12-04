import {
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from "./components/Home";
import Color from "./components/Color";
import './App.css'
    
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:word/:color1" element={<Color />} />
        <Route path="/:word" element={<Color />} />
        <Route path="/:word/:color1/:color2" element={<Color />} />
      </Routes>
    </div>
  );
}
    
export default App
