// import styled-components
import { CardCortesia } from '../components/bootstrap/cardCortesia/cardCortesia';
import { Center, Cortesias } from '../components/bootstrap/cardCortesia/styled';
import { Page } from '../components/styled_components/page/styled';

// import svg cards
import image1 from '../img/cortesias/img1.svg';
import image2 from '../img/cortesias/img2.svg';
import image3 from '../img/cortesias/img3.svg';

// import bootstrap
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ContextLogic } from '../context/Provider';

export const Cortesia = () => {
  const { noRouter } = useContext(ContextLogic);

  return (
    <Page id="cortesia">
      <Center>
        <h1 className="h1">Cortesias</h1>
        <Cortesias>
          <CardCortesia
            img={image1}
            title="Café da Manhã"
            description="Servido todos os dias entre 6h e 10h, somente para o pernoite."
          />
          <CardCortesia
            img={image2}
            title="Especial para Aniversariantes"
            description="A equipe do Vison Motel quer tornar o seu aniversário ainda mais especial!"
          />
          <CardCortesia
            img={image3}
            title="Descontos"
            description="Economize se hospedando com desconto no Motel Vison!"
          />
        </Cortesias>
        <a>
          <Button onClick={() => noRouter()}>Ver todas as cortesias</Button>
        </a>
      </Center>
    </Page>
  );
};
