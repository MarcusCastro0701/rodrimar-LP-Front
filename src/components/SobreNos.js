import React from 'react';
import { BsTruck } from "react-icons/bs";
import styled from "styled-components";
import Carousel from "./NHistoriaCarrossel/CarrosselH";
export default function SobreNos(){

  const BsTruckIcon = styled(BsTruck)`
  font-size: 20vh;
  margin-left: 18vw;
  color: white;
  transition: transform 0.2s; 
  @media(max-width: 1200px) {
    display:none;
  }
  
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

            <p>
              Somos uma empresa de alto padrão e excelência. Atuamos no setor de transportes de calcário, cal, carvão coque e farelo, além de transportes pesados com frota própria e agregados, abrangendo o transporte de minérios em geral (a granel e ensacados).
            </p>

            <p>
              No mercado há mais de 50 anos, a Transporte Rodrimar é uma das empresas mais tradicionais em seus segmentos. Com uma frota acima de 60 veículos, nossa empresa oferece qualidade e eficiência, desenvolvendo um trabalho mais seguro aos nossos clientes e colaboradores.
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
width: 100%;
height: 80vh;
background: linear-gradient(to right,rgba(4, 28, 68, 1),rgba(4, 28, 68, 0.6)), url("https://img.freepik.com/fotos-gratis/veiculo-de-caminhao-longo-pronto-para-entrega-e-transporte_342744-1294.jpg?w=1380&t=st=1693518357~exp=1693518957~hmac=52dfcf984acf66992463f98a8b5085988eb64367a3b6567f02c5127d43f57ef9") no-repeat center center / cover;
box-shadow: rgba(0,0,0) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
h1 {
        padding-left: 1vw;
        border-left: 8px solid #09DCFF;
        font-size: 3.2vh;
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
    font-size:2vh;
    line-height: 1.5;
    width:30vw;
  }
@media (max-width: 1200px) {
  flex-direction: column;
  width: 100%;
  h1{
    margin-top: 5vh;
  }
    p{
      font-size:1.8vh;
      height:10vh;
      width:80vw;
      margin: 4vh 3vh 50px 3vh;
    }
  }
`

const Left = styled.div`
width:40vw;
backdrop-filter: blur(5px);
@media (max-width:1200px) {
  margin:2vh 4vw;
}
`
const Right = styled.div`
backdrop-filter: blur(5px);
display:flex;
justify-content:center;
align-items:center;


  @media (max-width: 1200px) {
    width:40vw;
    height:40vw;
    backdrop-filter: none;
    margin:auto;
  }

`

