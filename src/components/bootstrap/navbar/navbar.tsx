// imports bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// imports styled-components
import { Header } from './styled';

// imports svg
import logo from '../../../img/svgs/logo.svg';
import hamburguer from '../../../img/svgs/hamburguer.svg';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

export const Navbar_Bootstrap = () => {
  const { navigate } = useContext(Context);

  return (
    <Header>
      <Navbar data-aos="fade-down">
        <img
          data-aos="flip-left"
          data-aos-duration="3000"
          src={logo}
          alt="logo"
          onClick={() => navigate('/')}
        />
        <Container>
          <Navbar.Brand href="#pageHome">Início</Navbar.Brand>
          <Navbar.Brand href="#suites">Suítes</Navbar.Brand>
          <Navbar.Brand href="#motel">O Motel</Navbar.Brand>
          <Navbar.Brand href="#cortesia">Cortesias</Navbar.Brand>
          <Navbar.Brand href="#localizacao">Localização</Navbar.Brand>
          <Navbar.Brand href="#contato">Contato</Navbar.Brand>
        </Container>
        <Navbar.Brand href="#suites">
          <Button>Reservas</Button>
        </Navbar.Brand>
        <div className="mb-2">
          <DropdownButton
            id={`dropdown-button-drop-up`}
            align="end"
            title={
              <img className="menu_hamburguer" src={hamburguer} alt="logo" />
            }
            drop={'up-centered'}
          >
            <Dropdown.Item href="#pageHome" eventKey="1">
              Início
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#suites" eventKey="2">
              Suítes
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#motel" eventKey="3">
              O Motel
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#cortesia" eventKey="4">
              Cortesias
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#localizacao" eventKey="5">
              Localização
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#contato" eventKey="6">
              Contato
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </Navbar>
    </Header>
  );
};
