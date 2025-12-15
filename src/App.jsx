import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, Outlet } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Browsebooks from './Components/Browsebooks'
import './Components/styles.css'
import AddBooks from './Components/AddBooks'
import ViewDetails from './Components/ViewDetails'
import NoFound from './Components/NoFound'
import Header from './Components/Header'

function App() {

  //Routes to homepage,browse books,add books and view details,notfound
  return( <>
    
     <Routes >
      <Route element={<Header />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/browsebooks/:category" element={<Browsebooks />} />
      <Route path="/addbooks" element={<AddBooks />} />
      <Route path="/viewdetails/:id" element={<ViewDetails />} />
      </Route>
      <Route path="*" element={<NoFound />} />
      
    </Routes>
    </>
    );
}

export default App
