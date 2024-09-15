import "./App.css";
import List from "./components/List";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import StarshipDetail from "./components/StarShipDetail";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/starship/:id" element={<StarshipDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
