import { useState } from 'react'

import './App.css'
import Header from './Header.jsx'
import Board from './Board.jsx'

const PLAYERX = "Player 1 - Xs"
const PLAYER0 = "Player 2 - 0s"

function App() {
  const [turn, setTurn] = useState(PLAYER0)
  const [values, setValues] = useState([
    ["X", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ])

  return (
    <>
      <h1>TicTacToe</h1>
      <Header turn={turn}/>
      <Board values={values}/>
    </>
  )
}

export default App
