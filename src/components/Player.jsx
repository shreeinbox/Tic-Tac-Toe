import React, { useEffect } from 'react'

const Player = ({choosePlayer, player}) => {
    console.log('in player compo' ,player)
    const [userPlayer, setUserPlayer] = React.useState('')

    function handlePlayer (player){
        setUserPlayer(player)
        choosePlayer(player)
    }
    React.useEffect(()=>{
      if(player === ''){
        setUserPlayer('')
      }
    },[player])

  return (
    <div className="container bg-yellow-800 text-yellow-100 w-fit p-2 mx-auto mt-10" >
      <h1>Please choose the player X or O</h1>
        <div className='w-fit flex gap-15 items-center text-black mx-auto mt-10'>
        <button className="pt-5 pb-5 pl-10 pr-10 rounded bg-blue-200 shadow-[4px_0_0_rgba(0,0,0,0.2)]
                            hover:bg-yellow-100"
                onClick={()=>handlePlayer('X')}
                disabled = {userPlayer !== ''}
                >
                  {console.log('in local state' ,userPlayer)}
            X </button>
        <button className='pt-5 pb-5 pl-10 pr-10 rounded bg-blue-200 shadow-[4px_0_0_rgba(0,0,0,0.2)]
                           hover:bg-yellow-100'
                onClick={()=>handlePlayer('O')}
                disabled = {userPlayer !== ''}>
            O </button>
        </div>
    </div>
  )
}

export default Player
