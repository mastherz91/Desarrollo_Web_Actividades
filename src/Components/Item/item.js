import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

function Item() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="cocinar.png" />
            <Card.Body>
                <Card.Title>Cocinar</Card.Title>
                <Card.Text>
                    Todas las noches cocinar la cena para la familia
                </Card.Text>
                <Button variant="primary">Terminado</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;