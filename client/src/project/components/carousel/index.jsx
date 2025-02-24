import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { BuyBtn } from './styles';

export function MyCarousel() {
  return (
    <Carousel data-bs-theme="dark"  style={{marginTop: "85px"}}>
      <Carousel.Item style={{backgroundColor: "white"}}>
        <img style={{margin: "auto", position: "relative"}}
          className="d-block"
          src='src/project/img/Macs.png'
          alt="First slide"
        />
        <BuyBtn> Գնել </BuyBtn>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor: "black"}}>
        <img style={{margin: "auto", position: "relative"}}
          className="d-block"
          src='src/project/img/1.png'
          alt="Second slide"
        />
        <BuyBtn> Գնել </BuyBtn>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor: "#f5f5f7"}}>
        <img style={{margin: "auto", position: "relative"}}
          className="d-block"
          src='src/project/img/2.png'
          alt="Third slide"
        />
        <BuyBtn> Գնել </BuyBtn> 
      </Carousel.Item>
    </Carousel>
  );
}
