import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './pages/adminlogin';
import PrivateRoute from './pages/privateRoute';
import AdminPage from './pages/adminPage';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleSetToken = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin/login" element={<AdminLogin setToken={handleSetToken} />} />
          <Route 
            path="/admin" 
            element={
              <PrivateRoute token={token}>
                <AdminPage setToken={setToken} />
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

