import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Landingpage } from './pages/landing-page'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </>
  )
}

export default App
