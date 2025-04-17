import React from 'react'
import Game from './components/Game'
import Home from './components/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/game" element={<Game></Game>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
