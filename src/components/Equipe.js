import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import TeamMember from "./CarouselComponent";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scroll from "../hooks/Scroll";
import equipe from "../assets/images/equipe.png"

export default function Equipe(){

  const members = [
    {
      name: 'Álvaro Caires',
      role: 'Marketing',
      imgSrc:' alvaro'
    },
    {
      name: 'Pablo Siervuli',
      role: 'Marketing',
      imgSrc: 'pablo'
    },
    {
      name: 'Marcus Castro',
      role: 'Desenvolvedor',
      imgSrc: 'marcus',
    },
    {
      name: 'Pedro Leôncio',
      role: 'Desenvolvedor',
      imgSrc: 'pedrol',
    },
    {
      name: 'Pedro Ribeiro',
      role: 'Desenvolvedor',
      imgSrc:' pedroa',
    },
    
  ]

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
  };
        return (
          <>
            <Container>
              <p>Nossa equipe</p>
              <img src={equipe}/>
            </Container>
            <Click onClick={() => scroll(2780)}>
              CONHEÇA NOSSOS SERVIÇOS
            </Click>
          </>
        );
}

const Click = styled.div`
width: 300px;
height: 50px;
color: #1F22DA;
background-color: #1F22DA;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0 150px 0;
cursor: pointer;
`

const Container = styled.div `
height: 700px;
width: 800px;
margin-top: 60px;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column; 
img{
  width: 700px;
  height: 700px;
  @media (max-width: 1200px) {
    width: 300px;
    height: 300px;
  }
}
p{
  text-align: center;
  color: #1F22DA;
  font-size: 40px;
  @media (max-width: 1200px) {
    margin-bottom: 20px;
    font-size: 35px;
  }
}
@media (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`
const Carousel = styled(Slider)`
height: 500px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: #1F22DA;
@media (max-width: 1200px) {
    width: 370px;
    height: 280px;
  }
img{
    width:400px;
    height: 350px;
    border-radius: 5%;
    @media (max-width: 1200px) {
    width: 240px;
    height: 180px;
    margin: 10px 0 40px 0;
  }
}
.slick-dots li button:before {
  color: #1F22DA; 
}
p{
  color: #1F22DA;
  font-size: 32px;
  margin-top: 10px;
  display: flex;
  flex-direction:column;
  @media (max-width: 1200px) {
    font-size: 27px;
    line-height: 30px;
  }
  b{
    color: #1F22DA;
    font-size: 25px;
    margin-top: 15px;
    @media (max-width: 1200px) {
      font-size: 23px;
      line-height: 25px;
      margin-bottom: 30px;
    }
  }
}

`