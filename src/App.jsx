import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Species from "./pages/Species";
import Char from "./pages/Char";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="gaya">
          Home
        </Link>
        <Link to="/Species" className="gaya">
          Species
        </Link>

        <Link to="/Character" className="gaya">
          Characters
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Species" element={<Species />}></Route>
        <Route path="/Character" element={<Char />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
