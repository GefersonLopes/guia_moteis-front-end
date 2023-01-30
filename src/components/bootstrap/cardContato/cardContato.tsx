//import styled-components
import { MainContato } from './styled';

//import bootstrap
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

//import svg logo
import logo from '../../../img/svgs/logo.svg';

export const CardContato = () => {
  return (
    <MainContato>
      <div className="groupLogo">
        <img src={logo} alt="" />
        <span>
          Rua SPMS, Conj./Lote 175/225 - Núcleo <br /> Bandeirante - Brasília -
          DF
        </span>
      </div>
      <div className="groupButtons">
        <Button variant="primary">Revervas</Button>
        <Button variant="primary">Ver suites</Button>
        <Button variant="outline-primary" className="outline-primary">
          Whatsapp
        </Button>
        <Button variant="outline-primary" className="outline-primary">
          Contato
        </Button>
      </div>
      <div className="groupNavigate">
        <Container>
          <Navbar.Brand href="#pageHome">Início</Navbar.Brand>
          <Navbar.Brand href="#suites">Suítes</Navbar.Brand>
          <Navbar.Brand href="#motel">O Motel</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand>Gastronomia</Navbar.Brand>
          <Navbar.Brand href="#localizacao">Localização</Navbar.Brand>
          <Navbar.Brand href="#suites">Reservas</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand>
            Whatsapp: <br />
            (061) 3552-2297
          </Navbar.Brand>
          <Navbar.Brand>
            E-mail: <br />
            contato@motelvison.com
          </Navbar.Brand>
        </Container>
      </div>
      <footer>
        <p>guia de motéis sites │ guia de motéis ©</p>
      </footer>
    </MainContato>
  );
};
