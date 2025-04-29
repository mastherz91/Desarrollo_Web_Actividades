import logo from './logo.svg';
import './App.scss';
import Item from './Components/Item/item';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/esm/Container';
import Formulario from './Components/Formulario/formulario';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
          <Col><Formulario></Formulario></Col>
          <Col><Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item></Col>

        </Row>

      </Container>

    </div>
  );
}

export default App;
