// import bootstrap
import Carousel from 'react-bootstrap/Carousel';

// import svg's suites
import image1 from '../../../img/suites/image1.svg';
import image2 from '../../../img/suites/image2.svg';
import image3 from '../../../img/suites/image3.svg';
import { CardImg } from './styled';

export const SuitesCarousel = () => {
  return (
    <CardImg>
      <h1>Nossas suítes</h1>
      <Carousel fade slide={false}>
        <Carousel.Item>
          <img src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </CardImg>
  );
};
