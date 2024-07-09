import { COMBOS_TO_WIN } from "../constants/constants"

export const verifyWinner = (verifyBoard) => {
    //revisamos los combos segun los divs pintados en y si estos ya son pertenecientes a los combos de victoria finaliza el juego
    for (const combo of COMBOS_TO_WIN) {
      const [a,b,c] =  combo
      if (verifyBoard[a] && verifyBoard[a] === verifyBoard[b] && verifyBoard[a] === verifyBoard[c]) return verifyBoard[a]
      
      //sino simplemente devuelve null que significa que no hay ganador aun
    }
    return null
  }

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }