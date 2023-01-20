import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Emp from './Emp';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetails';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/employee' element={<Emp/>}></Route>
        <Route path='/create' element={<EmpCreate/>}></Route>
        <Route path='/detail/:empid' element={<EmpDetail />}></Route>
        <Route path='/edit/:empid' element={<EmpEdit />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
