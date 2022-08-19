import "./App.css";
import NavBar from "./Components/NavBar";
import CatFact from "./Components/CatFact";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Bitcoin from "./Components/Bitcoin";
import DogImage from "./Components/DogImage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/catFact" element={<CatFact />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="/dogImage" element={<DogImage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
