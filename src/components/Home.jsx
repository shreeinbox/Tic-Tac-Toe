import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    

    return (
        <div className="container mx-auto h-screen p-4 bg-yellow-100 text-center rounded-lg shadow-md">
            <img className="mx-auto mt-10 mb-10 w-30 h-30 bg-blue-100 p-3 shadow-[-4px_4px_0_rgba(0,0,0,0.2)]" src="./src/assets/images/logo.png" alt="an image of tictactoe" />
            <header className="text-4xl font-bold text-yellow-500 font-bold mb-4">
                <h1 className="first-letter:text-6xl first-letter:text-blue-300">
                    Tic <span className="inline-block first-letter:text-6xl first-letter:text-blue-300">Tac</span>
                    <span className="inline-block first-letter:text-6xl first-letter:text-blue-300">Toe</span>
                </h1> 
            </header>
            
            <p className="text-lg text-gray-700 mb-4">
                This game is <span className='underline font-bold text-yellow-500'> 3000 </span> years old. There are over <span className='underline font-bold text-yellow-500'>255,000</span> possible outcomes in this game 😲 
            </p>
            
            <p className="text-lg mb-15 text-gray-700 mb-5">
                This game is one of the <span className="underline font-bold text-yellow-500">first game</span> programmed in 1951.
            </p>
            
            {/* <button onClick={handleNext}>Let's Go </button> */}
            <NavLink to='/game'
                    // className="p-10 bg-blue-500 text-white font-bold py-2 px-4 
                    // rounded-lg shadow-lg border-b-4 border-blue-700 hover:translate-y-0.5 
                    // hover:shadow-md active:border-b-0 active:translate-y-1 
                    // transition-all duration-150"
                    className="bg-gradient-to-b from-blue-100 to-blue-200 
                               text-yellow-800 font-bold py-2 px-4
                               shadow-[-4px_4px_0_rgba(0,0,0,0.2)] 
                               active:shadow-[-3px_-2px_0_rgba(0,0,0,0.2)] active:translate-y-1 transition"
            >
                Let's Go
            </NavLink>
        </div>
    )
}

export default Home
