import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserLayout from './Components/Layouts/UserLayout'
import Home from './Components/Pages/Home';
import {Toaster} from "sonner";
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Profile from './Components/Pages/Profile';
import CollectionsPg from './Components/Pages/CollectionsPg';

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='collections/:collection' element={<CollectionsPg/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;