import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import WorkerPage from './pages/WorkerPage';
import OfficePage from './pages/OfficePage';
import ManagerPage from './pages/ManagerPage';

function App() {
  return (
    <Router>
      <nav style={{ margin: '20px' }}>
        <Link to="/admin" style={{ marginRight: '10px' }}>Admin</Link>
        <Link to="/worker" style={{ marginRight: '10px' }}>Worker</Link>
        <Link to="/office" style={{ marginRight: '10px' }}>Office</Link>
        <Link to="/manager">Manager</Link>
      </nav>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/worker" element={<WorkerPage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/" element={<h1>Welcome to Sewer Swarm Timesheets</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
