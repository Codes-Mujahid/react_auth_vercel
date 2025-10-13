import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { Toaster } from "react-hot-toast";
import Dashboard from './pages/Dashboard';
import { AppContext } from './context/AppContext';
import ResetPass from './components/ResetPass';
import ForgetPass from './components/ForgetPass';


const App = () => {
  const {isLogged} = useContext(AppContext)
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-4 sm:mt-[5vw] md:mt-[7vw] lg:mt-[9vw]'>

      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-pass' element={<ResetPass/>} />
        <Route path='/forget-pass' element={<ForgetPass/>} />
        <Route path='/dashboard' element={isLogged? <Dashboard/> : <Navigate to={'/'}/>} />
      </Routes>
    </div>
  );
};

export default App;

