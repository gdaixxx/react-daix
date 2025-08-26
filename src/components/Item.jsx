import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src={item.image} /> */}
      <Card.Body>
        <Card.Title>{item.título}</Card.Title>
        <Card.Text>
          {item.autoría}
        </Card.Text>
        <Button variant="primary">Reservar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;