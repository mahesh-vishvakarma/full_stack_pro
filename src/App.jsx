import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserLayout from './Components/Layouts/UserLayout'
import Home from './Components/Pages/Home';
import {Toaster} from "sonner";
import Login from './Components/Pages/Login';
const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;