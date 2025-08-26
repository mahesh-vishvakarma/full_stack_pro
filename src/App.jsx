import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserLayout from './Components/Layouts/UserLayout'
import Home from './Components/Pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;