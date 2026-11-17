import Casilla from './Casilla.jsx'

function Board(props){
    return <div>
            {
              props.values.map((rowValues, index) => {
                let row = rowValues.map((value, columnIndex) => {
                  return <Casilla key={index + "-" + columnIndex} row={index} col={columnIndex} value={value} appClick={props.appClick} />
                })
                return <div key={"row" + index}>{row}</div>
                })
            }
        </div>
    
}
export default Board