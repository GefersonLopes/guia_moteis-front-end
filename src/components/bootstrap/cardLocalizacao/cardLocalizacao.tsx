//import bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//import styled-components
import { MainLocalizacao } from './styled';

//import styled-components
import mapa from '../../../img/localizacao/mapa.png';
import { ContextLogic } from '../../../context/Provider';
import { useContext } from 'react';

export const CardLocalizacao = () => {
  const { tracarRota } = useContext(ContextLogic);
  return (
    <MainLocalizacao>
      <Card data-aos="fade-right" data-aos-easing="ease-in-sine">
        <Card.Img variant="top" src={mapa} />
        <Card.Body>
          <Card.Title>Localização</Card.Title>
          <Card.Text>
            Avenida Santos Dumont, 5253 <br /> Zona Industrial Norte - Joinville
            - SC
          </Card.Text>
          <a target="_blank" href={tracarRota}>
            <Button variant="primary">Traçar rota</Button>
          </a>
        </Card.Body>
      </Card>
    </MainLocalizacao>
  );
};
