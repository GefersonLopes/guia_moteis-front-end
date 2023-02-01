// import styled-cpomponents
import { CardMotel_Bootstrap, DivCentered } from './styled';

// import svg wallpaper
import motel from '../../../img/motel/motel.png';

// import bootstrap
import Button from 'react-bootstrap/Button';

export const CardMotel = () => {
  return (
    <DivCentered>
      <CardMotel_Bootstrap>
        <div>
          <h1>O Motel</h1>
          <p>
            O Vison Motel está localizado na Zona Industrial Norte, em Joinville
            e conta com ambientes exclusivos e privativos, basta escolher a
            suíte que mais combina com você.
          </p>
          <p>
            Todos os quartos são equipados com TV, ar-condicionado, ducha,
            frigobar e garagem privativa, enquanto outras opções vão além:
            oferecem hidromassagem, pole dance, x sado e no caso da Suíte
            Erótika, até mesmo uma jaula ao redor da cama.{' '}
          </p>
          <p>
            Hospede-se e aproveite ainda nosso delicioso café da manhã, servido
            todos os dias para pernoites!
          </p>
          <Button>Saiba mais</Button>
        </div>

        <a>
          <img id="imgMotel" src={motel} alt="motel" />
        </a>
      </CardMotel_Bootstrap>
    </DivCentered>
  );
};
