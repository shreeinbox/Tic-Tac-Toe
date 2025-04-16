import React from 'react'
import Game from './components/Game'
import './App.css'

const App = () => {
  return (
    <div className="container mx-auto p-4 bg-yellow-100 text-center rounded-lg shadow-md">
      <header className="text-2xl text-yellow-500 font-bold  mb-4">Tic Tac Toe</header>
      <p className="text-lg text-gray-700 mb-4">This game is 3000 years old. There are over 255,000 possible outcomes in this game 😲 </p>
      <p className="text-lg text-gray-700">This game is one of the first game programmed in 1951</p>
      <Game />
    </div>
  )
}

export default App
