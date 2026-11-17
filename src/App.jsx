import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'
import Reset from './components/Reset.jsx'

const PLAYERX = "Player 1 - Xs"
const PLAYER0 = "Player 2 - 0s"
const MYURL = "https://api.npoint.io/c734e05e43c5b87dd971";

function App() {
  const [moves, setMoves] = useState(0)
  const [turn, setTurn] = useState(PLAYER0)
  const [values, setValues] = useState([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ])
  const [loading, setLoading] = useState(true)
  
  useEffect (() => {
    async function fetchData() {
      const response = await fetch(MYURL)
      const data = await response.json()
      console.log(data)
      setTurn(data.turn)
      setMoves(data.moves)
      setValues(data.values)
      setLoading(false)
    }
    fetchData()
  },[])

  function appClick(rowNumber, colNumber) {
    console.log("Click en " + rowNumber + " " + colNumber)
    let valuesCopy = JSON.parse(JSON.stringify(values))
    let newTurn = turn === PLAYERX ? "X" : "0"
    valuesCopy[rowNumber][colNumber] = newTurn
    setTurn(turn === PLAYER0 ? PLAYERX : PLAYER0)
    setValues(valuesCopy)
    setMoves(moves + 1)
  }

  function resetClick() {
    console.log("Reset")
    setTurn(PLAYER0)
    setValues([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"]
    ])
    setMoves(0)
  }

  return (
    <>
      <h1>TicTacToe</h1>
      {loading ? <h2>CARGANDO...</h2> : <div>
        <Header turn={turn}/>
        <Board values={values} appClick={appClick}/>
        <h3>Número de movimientos: {moves}</h3>
        <Reset resetClick={resetClick}/>
      </div>}
    </>
  )
}

export default App
