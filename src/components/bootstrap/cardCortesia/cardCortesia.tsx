// import bootstrap
import Card from 'react-bootstrap/Card';

// import interface
import { ICardCortesias } from '../../../interfaces/interfaces';

export const CardCortesia = ({ img, title, description }: ICardCortesias) => {
  return (
    <li>
      <Card data-aos="zoom-in">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </li>
  );
};
