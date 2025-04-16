import React from 'react'

const Game = () => {
    const arrXorO = ['X','O','X','O','X','O','X','O', 'X', 'O']
    const [buttons, setButtons] = React.useState([])
    const [ticTac, setTicTac] = React.useState({})
    
    //Derived Variables
    let isGameWon = false
   
    
    //Game Status Logic
    if(Object.keys(ticTac).length >= 3){
        //rowcheck
        if( (ticTac[0] &&ticTac[1] && ticTac[2] ) && (ticTac[0] === ticTac[1] && ticTac[0] === ticTac[2]) ||
            (ticTac[3] && ticTac[4] && ticTac[5]) && (ticTac[3] === ticTac[4] && ticTac[3] === ticTac[5]) ||
            (ticTac[6] && ticTac[7] && ticTac[8]) && (ticTac[6] === ticTac[7] && ticTac[6] === ticTac[8]))
            {
                console.log('hey')
                console.log(ticTac[0]===ticTac[1])
                //console.log(t)
                isGameWon = true
            }
        else if( 
        //     //column check
             (ticTac[0] && ticTac[3] && ticTac[6]) && (ticTac[0] === ticTac[3] && ticTac[0] === ticTac[6]) ||
             (ticTac[1] && ticTac[4] && ticTac[7]) && (ticTac[1] === ticTac[4] && ticTac[1] === ticTac[7]) ||
             (ticTac[2] && ticTac[5] && ticTac[8]) && (ticTac[2] === ticTac[5] && ticTac[2] === ticTac[8]) 
         ){
             console.log('hi')
             isGameWon = true
         } else if(
             //diagnol check
             (ticTac[0] && ticTac[4] && ticTac[8]) && (ticTac[0] === ticTac[4] && ticTac[0] === ticTac[8]) ||
             (ticTac[2] && ticTac[4] && ticTac[6]) && (ticTac[2] === ticTac[4] && ticTac[2] === ticTac[6]) 
         ){
             console.log('hallo')
             isGameWon = true
        } 
        else{
            isGameWon = false
        }
        console.log('result:',isGameWon)
    }

    const isGameOver = !isGameWon ? Object.keys(ticTac).length === 9 : isGameWon

    React.useEffect(()=>{
        const random = Math.floor(Math.random()*2)
        const newButtons = random === 1? [...arrXorO] : [...arrXorO].reverse()
        setButtons(newButtons)
        //console.log(random, buttons)
    },[])

    //OnClick X or O buttons
    const chooseXorO=(id) =>{
        //console.log('here', buttons)
        if(isGameWon){
            return
        }
        setTicTac((prevTicTac)=>{
            const tic = Object.keys(prevTicTac).length
            //console.log('length', tic)
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
                disabled={ticTac[index]}
                >{ticTac[index]? ticTac[index] : ''} 
                </button>)
    })

  return (
    <div>
        <section className="container text-yellow-100 mt-10 mx-auto border-4 border-black p-2
                            bg-yellow-800 w-1/4 h-auto rounded-lg">{isGameWon? 'Tic Tac Toe' :  isGameOver? 'Game Over - its a draw': 'Game Starts'}
        </section>
        <section className="container mt-3 mx-auto my-auto w-1/4 aspect-square
                            border-4 border-black-800 p-2
                            bg-gray-800 rounded-lg 
                            grid grid-cols-3 gap-2">
            {
            buttonElements
            }
        </section>  
        {isGameOver ? <button className="px-4 py-2 mt-3 bg-yellow-400 border-4 border-yellow-800 
                                        text-yellow-800 rounded transition-all duration-300 hover:bg-yellow-800 
                                        hover:scale-110 hover:text-yellow-100"
                                onClick={()=>{handleNewGame()}}>
            New Game
        </button> : ''}
    </div>
  )
}

export default Game
