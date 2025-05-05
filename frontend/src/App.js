import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Owner from './Components/owner';
import Form from './Components/form';
import Footer from './Components/footer';
import { useState } from 'react';
import AdminLogin from './admin/adminlogin';
import PrivateRoute from './Components/privateRoute';
import AdminPage from './Components/adminPage';
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
          <Route path="/" element={
            <>
              <Header />
              <Owner />
              <Form />
              <Footer />
            </>
          } />
          <Route path="/admin/login" element={<AdminLogin setToken={handleSetToken} />} />
          <Route 
            path="/admin" 
            element={
              <PrivateRoute token={token}>
                <AdminPage setToken={setToken}/>
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
