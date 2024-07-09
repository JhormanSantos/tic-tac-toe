import { useState } from "react"
import confetti from "canvas-confetti"
import { TURNS } from "./constants/constants"
import { Turns } from "./components/Turns"
import { Results } from "./components/Results"
import { removeData, saveData } from "./logic/storage"
import { Board } from "./components/Board"
import { checkEndGame, verifyWinner } from "./logic/GameLogic"



function App() {
  
const [board, setboard] = useState(()=> {
  const BoardFromLocalStorage = localStorage.getItem('board')
  if (BoardFromLocalStorage) return JSON.parse(BoardFromLocalStorage)
  return Array(9).fill(null)
}) //fill para llenar todas las pos del array

const [turns,setTurns] = useState(() => {
  const turnFromLocalStorage = localStorage.getItem('turn')
  if (turnFromLocalStorage) return turnFromLocalStorage 
  return TURNS.x
})

const [winner, SetWinner] = useState(() => {
  const WinnerFromLocalStorage= localStorage.getItem('winner')
  if (WinnerFromLocalStorage=== 'false') return false
  else if (WinnerFromLocalStorage) return WinnerFromLocalStorage
  return null
})




const updateBoard = (index) => {

  //no sobreescribir en el cuadro si ya hay una letra osea ya se ha usado ese indice
  if (board[index] || winner) return

  //pintar la letra en el tablero segun el indice en donde clicko
  const newBoard= [...board]
  newBoard[index] = turns
  setboard(newBoard)

  //cambiar el turno
  const changeTurn = turns === TURNS.x ? TURNS.o : TURNS.x
  setTurns(changeTurn)

  saveData({
    board: newBoard,
    turn: changeTurn
  })

  const newWinner = verifyWinner(newBoard)
  if (newWinner) {
    confetti()
    SetWinner(newWinner)
    
  } else if (checkEndGame(newBoard)) {
    SetWinner(false)
    
  }
  
}

const resetGame = () => {
  setboard((Array(9).fill(null)))
  setTurns(TURNS.x)
  SetWinner(null)

  removeData()
}

  return (
    
      <main className="board">
        <h1>Triki traki</h1>
        <button onClick={resetGame}>Restart</button>
        <Board board={board} updateBoard={updateBoard}/>

        <Turns stateTurn={turns}/>

        {
          winner !== null && (
            <Results winner={winner} resetGame={resetGame}/>
          )
        }
      </main>
  )
}

export default App
