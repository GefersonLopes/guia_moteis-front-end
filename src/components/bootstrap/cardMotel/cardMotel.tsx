// import styled-cpomponents
import { CardMotel_Bootstrap, DivCentered } from './styled';

// import svg wallpaper
import motel from '../../../img/motel/motel.png';

// import bootstrap
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ContextLogic } from '../../../context/Provider';

export const CardMotel = () => {
  const { sobre } = useContext(ContextLogic);

  return (
    <DivCentered>
      <CardMotel_Bootstrap>
        <div data-aos="fade-right">
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
          <a target="_blank" href={sobre}>
            <Button>Saiba mais</Button>
          </a>
        </div>

        <a data-aos="fade-left">
          <img id="imgMotel" src={motel} alt="motel" />
        </a>
      </CardMotel_Bootstrap>
    </DivCentered>
  );
};
