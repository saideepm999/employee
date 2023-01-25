import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = window.localStorage.getItem('username');
    if (username === '' || username === null) {
      window.localStorage.removeItem('isLoggedin');
      usenavigate('/login');
    }
  }, []);

  return (
    <div>
      <div className="header">
        <Link to={'/'}>Home</Link>
        <Link to={'/employee'} className="pad">
          Employee data
        </Link>
        <Link style={{ float: 'right' }} to={'/login'}>
          Logout
        </Link>
      </div>
      <h1>welcome to home page!!!</h1>
    </div>
  );
}
