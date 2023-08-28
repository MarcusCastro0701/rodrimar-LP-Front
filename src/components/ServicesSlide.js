import React from 'react';
import styled from "styled-components";

export default function ServicesSlide(props) {
  return (
    <CarouselContainer>
      <Title>
        <h1>{props.name}</h1>
      </Title>
      <Description>
        <b>{props.description}</b>
      </Description>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  background-color: red;
  width: 100%;
  height: 35vh;
  align-items: center;
  border-radius: 15px;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.div`
  background-color: blue;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  h1 {
    font-size: 45px;
    @media (max-width: 1200px) {
      font-size: 25px;
    }
  }
  @media (max-width: 1200px) {
    background-color: purple;
    width: 100%;
    height: 15%;
  }
`;

const Description = styled.div`
  background-color: green;
  border-radius: 15px;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
 b {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 10px;
    font-size: 20px;
    line-height: 1.5em;
    background-color:red;
    
    @media (max-width: 1200px){
    }
  }

  @media (max-width: 1200px) {
    background-color: pink;
    width: 100%;
    height:85%;
    overflow-y:auto;
  }
`;
