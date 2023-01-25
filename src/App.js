import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Emp from './Emp';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetails';
import EmpEdit from './EmpEdit';

function App() {
  const loggedIn = window.localStorage.getItem('isLoggedin');
  console.log(loggedIn, 'login');
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Home /> : <Navigate replace to={'/login'} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/employee"
            element={loggedIn ? <Emp /> : <Navigate replace to={'/login'} />}
          ></Route>
          <Route
            path="/create"
            element={
              loggedIn ? <EmpCreate /> : <Navigate replace to={'/login'} />
            }
          ></Route>
          <Route
            path="/detail/:empid"
            element={
              loggedIn ? <EmpDetail /> : <Navigate replace to={'/login'} />
            }
          ></Route>
          <Route
            path="/edit/:empid"
            element={
              loggedIn ? <EmpEdit /> : <Navigate replace to={'/login'} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
