import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import caminhao from "../../assets/images/caminhao.jpg"
import caminhao2 from "../../assets/images/caminhao2.jpg"
import caminhao3 from "../../assets/images/caminhao3.jpg"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

const images = [
  caminhao,
  caminhao2,
  caminhao3,
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [opacityIMG, SetopacityIMG] = useState(1);

  const nextImage = () => {
    SetopacityIMG(0); 
    setTimeout(() => {
        SetopacityIMG(1)
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 400); 
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <CarouselContainer>
      <Image opc={opacityIMG}>
        <img src={images[currentImage]} alt={`Image ${currentImage}`} />
      </Image>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 40vw;
`;

const Image = styled.div`
  max-height: 500px;
  min-width: 30vw;
  img {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    max-width: 30vw;
    max-height: 500px;
    border-radius: 10px;
    opacity: ${(props) => props.opc};
    transition: opacity 0.4s; 
  }
`;

