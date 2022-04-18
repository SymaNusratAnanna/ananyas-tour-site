import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

// import images
import banner1 from '../../../images/banner/banner3.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner1.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Tour with Ananya's guid</h2>
            <h4>Travel with us and get exciting discount for you & your Family..</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h2>Tour with Ananya's guid</h2>
            <h4>Travel with us and get exciting discount for you & your Family...</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h2>Tour with Ananya's guid</h2>
            <h4>
            Travel with us and get exciting discount for you & your Family..
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;