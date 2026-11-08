import Casilla from './Casilla.jsx'

function Board(props){
    return <div>
            {
              props.values.map((rowValues, index) => {
                let row = rowValues.map((value, columnIndex) => {
                  return <Casilla key={index + "-" + columnIndex} value={value}/>
                })
                return <div key={"row" + index}>{row}</div>
                })
            }
        </div>
    
}
export default Board