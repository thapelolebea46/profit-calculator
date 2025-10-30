import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RevealCalculator from "./components/RevealCalculator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculate" element={<RevealCalculator />} />
    </Routes>
  );
}

export default App;
