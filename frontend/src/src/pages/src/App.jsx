import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import A1 from "./pages/A1";
import SW1 from "./pages/SW1";
import OW1 from "./pages/OW1";
import M1 from "./pages/M1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/A1" element={<A1 />} />
        <Route path="/SW1" element={<SW1 />} />
        <Route path="/OW1" element={<OW1 />} />
        <Route path="/M1" element={<M1 />} />
      </Routes>
    </Router>
  );
}

export default App;
