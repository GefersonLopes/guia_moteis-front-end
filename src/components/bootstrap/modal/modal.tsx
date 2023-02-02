// import's bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// import styled-components
import { Div } from './styled';

export const Container_Main = () => {
  return (
    <Div>
      <Card data-aos="zoom-in">
        <Card.Body>
          <Card.Text>Bem vindo ao</Card.Text>
          <Card.Title>Vison Motel</Card.Title>
          <Container>
            <Navbar.Brand href="#suites">
              <Button variant="primary">Ver suítes</Button>
            </Navbar.Brand>
            <Navbar.Brand href="#suites">
              <Button variant="primary">Reservas</Button>
            </Navbar.Brand>
          </Container>
        </Card.Body>
      </Card>
    </Div>
  );
};
