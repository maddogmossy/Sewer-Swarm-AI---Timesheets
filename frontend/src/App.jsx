import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import A1 from "./pages/A1.jsx";
import SW1 from "./pages/SW1.jsx";
import OW1 from "./pages/OW1.jsx";
import M1 from "./pages/M1.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<A1 />} />
        <Route path="/siteworker" element={<SW1 />} />
        <Route path="/officeworker" element={<OW1 />} />
        <Route path="/manager" element={<M1 />} />
      </Routes>
    </Router>
  );
}

export default App;
