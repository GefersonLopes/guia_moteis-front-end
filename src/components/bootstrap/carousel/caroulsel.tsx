// import bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import react
import { useContext } from 'react';
import { Context } from '../../../context/Context';

// import svg's suites
import image1 from '../../../img/suites/image1.svg';
import image2 from '../../../img/suites/image2.svg';
import image3 from '../../../img/suites/image3.svg';
import { CardImg } from './styled';
import { ContextLogic } from '../../../context/Provider';

export const SuitesCarousel = () => {
  const { next, prev } = useContext(Context);
  const { noRouter, linkMotel } = useContext(ContextLogic);

  return (
    <CardImg>
      <h1>Nossas suítes</h1>
      <div
        className="container"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="gallery-wrapper">
          <div className="gallery">
            <button
              onClick={() => prev()}
              className="arrow-left control"
              aria-label="Previous image"
            >
              &lt;
            </button>
            <button
              onClick={() => next()}
              className="arrow-right control"
              aria-label="Next Image"
            >
              &gt;
            </button>
            <div className="cardInfo">
              <Card className="text-center" data-aos="zoom-in-up">
                <Card.Body>
                  <div>
                    <Card.Title>Suíte Cristal</Card.Title>
                    <Card.Text>A partir de R$ 164,00</Card.Text>
                  </div>
                  <a target="_blank" href={linkMotel}>
                    <Button className="buttonMais">Saiba mais</Button>
                  </a>
                </Card.Body>
                <p className="ver" onClick={() => noRouter()}>
                  Ver todas as suítes
                </p>
              </Card>
            </div>
            <img src={image1} alt="" className="item left" />
            <img
              src={image2}
              alt=""
              className="item current-item center-item"
            />
            <img src={image3} alt="" className="item right" />
          </div>
        </div>
      </div>
    </CardImg>
  );
};
