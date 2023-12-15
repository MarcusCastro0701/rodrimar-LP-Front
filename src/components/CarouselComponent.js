import React from 'react';
import styled from "styled-components";

export default function TeamMember(props){
    return (
        <CarouselContainer>
          <img src={props.imgSrc} />
          <p>{props.name} <b>{props.role}</b></p>
        </CarouselContainer>
      );
}

const CarouselContainer = styled.div`
display: flex;
flex-direction: column;
width:100%;
height:100%;
align-items: center;
justify-content: center;
p{
  color: white;
  font-size: 34px;
  margin-top: 10px;
  display: flex;
  flex-direction:column;
  @media (max-width: 1200px) {
    font-size: 30px;
    line-height: 30px;
  }
  b{
    color: white;
    font-size: 28px;
    margin-top: 15px;
    @media (max-width: 1200px) {
      font-size: 25px;
      line-height: 25px;
      margin-bottom: 30px;
    }
  }
}
`


