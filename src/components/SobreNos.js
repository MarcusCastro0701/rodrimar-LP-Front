import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import scroll from "../hooks/Scroll";
import Carousel from "./NHistoriaCarrossel/CarrosselH";
import {BsTruck} from "react-icons/bs"
export default function SobreNos(){

  const BsTruckIcon = styled(BsTruck)`
  font-size: 200px;
  margin-left: 18vw;
  color: white;
  transition: transform 0.2s; 
  
  &:hover {
    transform: scale(1.1);
  }
`;

     const opts = {
        width:'800',
        height:'454',
         playerVars: {
           controls: 0,
           fs: 0,
           iv_load_policy: 3,
           modestbranding: 1,
           showinfo: 0,
           loop: 0,
           rel: 0,
         },
       };

    return(

        <Container id="1">
            <Left>
            <h1>{"Sobre Nós"}</h1>
            <p>Somos uma empresa de alto padrão e
        excelência. Atuamos no setor de transportes de calcário, cal, carvão coque e farelo, além de transportes pesados com frota própria e agregados, abrangendo o transporte de minérios em geral (a granel e ensacados).<br></br>
        No mercado há mais de 50 anos, a Transporte
    Rodrimar é uma das empresas mais tradicionais em seus segmentos. Com uma frota acima de 60 veículos, nossa empresa oferece qualidade e eficiência, desenvolvendo um trabalho mais seguro aos nossos clientes e colaboradores.
    </p>
    <BsTruckIcon/>
            </Left>
            <Right>
            <Carousel/>
            </Right>
        </Container >

    )

}


const Container = styled.div `
display: flex;
justify-content:center;
width: 99.2vw;
height: 80vh;
background: linear-gradient(to right,rgba(15, 1, 77, 0.85)50%,rgba(15, 1, 77, 0.85)50%), url("https://img.freepik.com/fotos-gratis/veiculo-de-caminhao-longo-pronto-para-entrega-e-transporte_342744-1294.jpg?w=1380&t=st=1693518357~exp=1693518957~hmac=52dfcf984acf66992463f98a8b5085988eb64367a3b6567f02c5127d43f57ef9") no-repeat center center / cover;
box-shadow: rgba(0,0,0) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
h1 {
        padding-left: 1vw;
        border-left: 8px solid #09DCFF;
        font-size: 32px;
        font-weight: 600;
        width: 100%;
        margin: 0 3vw;
        margin-top:10vh;
        color:white;
        height:32px;
    }
    p {
    color: white;
    margin: 4vh 3vw;
    font-size:30px;
    line-height: 1.5;
    width:30vw;
  }
@media (max-width: 1200px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    width: 100%;
  }
`

const Left = styled.div`
width:40vw;
backdrop-filter: blur(5px);
`
const Right = styled.div`
width:40vw;
backdrop-filter: blur(5px);
display:flex;
justify-content:center;
align-items:center;
iframe{
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    height: 454px;
    width: 800px;
    @media (max-width: 1200px) {
    width: 350px;
    height: 200px;
  }}

`

