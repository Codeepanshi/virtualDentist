import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Components/UI/button';
import { Input } from '../Components/UI/input';

const AdminLogin = ({ setToken }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setToken(data.token); 
      localStorage.setItem('token', data.token);
      alert('Logged in!');
      navigate('/admin');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mb-6">Admin Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 shadow-md rounded-md bg-gray-800">
          <Input 
            name="username" 
            value={form.username} 
            onChange={handleChange} 
            placeholder="Username" 
          /> 
          <Input 
            type="password" 
            name="password" 
            value={form.password} 
            onChange={handleChange} placeholder="Password" 
          />
          <Button type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

