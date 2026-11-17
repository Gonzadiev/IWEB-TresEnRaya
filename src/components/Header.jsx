
import Card from 'react-bootstrap/Card';

function Header(props){
    return(
        <div>
            <Card style={{ width: '18rem', margin: '0 auto', marginBottom: '20px' }}>
                <Card.Body>
                    <Card.Title><b>Turn of {props.turn}</b></Card.Title>
                </Card.Body>
            </Card>
            <h2>Hora de jugar</h2>
        </div>
    )
}
export default Header