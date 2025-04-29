import React from 'react'
import {Link} from 'react-router-dom'
import Player from './Player'

const Game = () => {
    const arrXorO = ['X','O','X','O','X','O','X','O', 'X', 'O']
    const [buttons, setButtons] = React.useState([])
    const [ticTac, setTicTac] = React.useState({})
    const [player, setPlayer] = React.useState('')
    const [turn, setTurn] = React.useState('')
    //Derived Variables
    let isGameWon = false
    //const isGameOver = !isGameWon ? Object.keys(ticTac).length === 9 : isGameWon
    const isGameOver = Object.keys(ticTac).length >= 9 || isGameWon

    //Game Status Logic
    if(Object.keys(ticTac).length >= 3){
        //rowcheck
        if( (ticTac[0] &&ticTac[1] && ticTac[2] ) && (ticTac[0] === ticTac[1] && ticTac[0] === ticTac[2]) ||
            (ticTac[3] && ticTac[4] && ticTac[5]) && (ticTac[3] === ticTac[4] && ticTac[3] === ticTac[5]) ||
            (ticTac[6] && ticTac[7] && ticTac[8]) && (ticTac[6] === ticTac[7] && ticTac[6] === ticTac[8]))
            {
                //console.log('hey')
                //console.log(ticTac[0]===ticTac[1])
                //console.log(t)
                isGameWon = true
            }
        else if( 
        //     //column check
             (ticTac[0] && ticTac[3] && ticTac[6]) && (ticTac[0] === ticTac[3] && ticTac[0] === ticTac[6]) ||
             (ticTac[1] && ticTac[4] && ticTac[7]) && (ticTac[1] === ticTac[4] && ticTac[1] === ticTac[7]) ||
             (ticTac[2] && ticTac[5] && ticTac[8]) && (ticTac[2] === ticTac[5] && ticTac[2] === ticTac[8]) 
         ){
             //console.log('hi')
             isGameWon = true
         } else if(
             //diagnol check
             (ticTac[0] && ticTac[4] && ticTac[8]) && (ticTac[0] === ticTac[4] && ticTac[0] === ticTac[8]) ||
             (ticTac[2] && ticTac[4] && ticTac[6]) && (ticTac[2] === ticTac[4] && ticTac[2] === ticTac[6]) 
         ){
             //console.log('hallo')
             isGameWon = true
        } 
        else{
            isGameWon = false
        }
        console.log('result:',isGameWon)
    }

    

    React.useEffect(()=>{
        console.log(player, 'userPlayer')
        //used for prev logic //const newButtons = player === 'X'? [...arrXorO] : [...arrXorO].reverse()
        const newButtons = [...arrXorO]

        setButtons(newButtons)

        if(player === 'O'){
            setTurn('C')
        }

    },[player])

    React.useEffect(()=>{
        console.log()
        if(turn === 'C'){
            if(isGameWon || isGameOver) return
            const selectedIndex = autoPlay()
            const computerPlayer = player === 'X' ? 'O': 'X'
            setTicTac((prevTicTac)=>{
                const tic = Object.keys(prevTicTac).length
                //console.log('length', tic)
                if(!prevTicTac[selectedIndex]){
                    return { ...prevTicTac, [selectedIndex]:computerPlayer}
                }
                else{
                    return prevTicTac
                }
            })
            setTurn('U')
        }
    },[turn])
    
    //Function for auto play
    function autoPlay() {
        //generate a number from 0 to 9 which is not in index of ticTac object
        const used = Object.keys(ticTac).map(Number)
        const available = []

        for(let i=0; i<9; i++){
            if(!used.includes(i)){
                available.push(i)
            }
        }
        if(available.length === 0) return null
        
        console.log('used' , used)
        console.log('available', available)
        
        const random = Math.floor(Math.random() * available.length)
        console.log('available', available)
        return available[random]
    }

    
    //console.log('autoplay-', autoPlay())

    //Function that is called when user chooses the player X or O.
    //Other left option would be computer
    function choosePlayer(value){
        console.log('button clicked', value)
        setPlayer(value)
    }

    //OnClick X or O buttons
    const chooseXorO=(id) =>{
        console.log('here', buttons)
        setTurn('C')
        if(isGameWon){
            return
        }
        setTicTac((prevTicTac)=>{
            const tic = Object.keys(prevTicTac).length
            console.log('length', tic)
            if(!prevTicTac[id]){
                return { ...prevTicTac, [id]:buttons[tic]}
            }
            else{
                return prevTicTac
            }
        })
    }

    const handleNewGame = () =>{
        setTicTac([])
        setPlayer('')
        setTurn('')
    }

    console.log(ticTac, 'ticTac')
    // colors green #AFF2B6 #7FD685 #FF84A0 #F76189
    const buttonElements = buttons.slice(0,9).map((button, index)=>{
        const color = index%2 === 0? 'from-[#AFF2B6] to-[#7FD685]' : 'from-[#FF84A0] to-[#F76189]'
        //const disabled = ticTac[index] || isGameWon
        
        return (<button key={index}
                className={`w-full h-full px-6 py-3 bg-gradient-to-r ${color} bg-center 
                text-black font-bold rounded-lg shadow-lg text-3xl
                transform hover:scale-90 transition-all hover:from-yellow-500 hover:to-yellow-700`}
                onClick={()=>{chooseXorO(index)}}
                disabled={ticTac[index] || player === ''}
                >{ticTac[index]? ticTac[index] : ''} 
                </button>)
    })

  return (
    <div className="container mx-auto h-auto p-4 bg-yellow-100 text-center rounded-lg shadow-md">
        
        <section className="float-right mr-5">
            <Link to='..' className="text-yellow-800 hover:underline">Back to Home Page</Link>
        </section>
        <Player choosePlayer={choosePlayer} player={player}/>
        
        <section className={isGameWon ? 'text-black mt-5 mb-5 mx-auto border-4 border-black p-2 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 w-1/4 h-auto rounded-lg animate-bounce animate-glow' 
            :'container text-yellow-100 mt-10 mx-auto border-4 border-black p-2 bg-yellow-800 w-1/4 h-auto rounded-lg'}>
        {/* className="container text-yellow-100 mt-10 mx-auto border-4 border-black p-2
        bg-yellow-800 w-1/4 h-auto rounded-lg" */}
            {isGameWon? 'Tic Tac Toe' :  isGameOver? 'Game Over - its a draw':
             player !=='' ? 'Your Turn: ' + player : 'Game Starts'}
        </section>
        
        <section className="container mt-3 mx-auto my-auto w-1/4 aspect-square
                            border-4 border-black-800 p-2
                            bg-gray-800 rounded-lg 
                            grid grid-cols-3 gap-2">
            {
            buttonElements
            }
        </section>  
        {isGameOver || isGameWon ? <button className="px-4 py-2 mt-3 bg-yellow-400 border-4 border-yellow-800 
                                        text-yellow-800 rounded transition-all duration-300 hover:bg-yellow-800 
                                        hover:scale-110 hover:text-yellow-100"
                                onClick={()=>{handleNewGame()}}>
            New Game
        </button> : ''}
    </div>
  )
}

export default Game
