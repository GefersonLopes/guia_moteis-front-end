//import bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//import styled-components
import { MainLocalizacao } from './styled';

//import styled-components
import mapa from '../../../img/localizacao/mapa.png';

export const CardLocalizacao = () => {
  return (
    <MainLocalizacao>
      <Card>
        <Card.Img variant="top" src={mapa} />
        <Card.Body>
          <Card.Title>Localização</Card.Title>
          <Card.Text>
            Avenida Santos Dumont, 5253 <br /> Zona Industrial Norte - Joinville
            - SC
          </Card.Text>
          <Button variant="primary">Traçar rota</Button>
        </Card.Body>
      </Card>
    </MainLocalizacao>
  );
};
