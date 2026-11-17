import { useState } from 'react'

import './App.css'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'

const PLAYERX = "Player 1 - Xs"
const PLAYER0 = "Player 2 - 0s"

function App() {
  const [turn, setTurn] = useState(PLAYER0)
  const [values, setValues] = useState([
    ["X", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ])

  function appClick(rowNumber, colNumber) {
    console.log("Click en " + rowNumber + " " + colNumber)
    let valuesCopy = JSON.parse(JSON.stringify(values))
    let newTurn = turn === PLAYERX ? "X" : "0"
    valuesCopy[rowNumber][colNumber] = newTurn
    setTurn(turn === PLAYER0 ? PLAYERX : PLAYER0)
    setValues(valuesCopy)
  }

  return (
    <>
      <h1>TicTacToe</h1>
      <Header turn={turn}/>
      <Board values={values} appClick={appClick}/>
    </>
  )
}

export default App
