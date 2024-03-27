import React from 'react';
import YouTube from 'react-youtube';
import styled from "styled-components";
import newLogoWhiteNoBG from '../assets/images/newLogoWhiteNoBG.png';

export default function NossaHistoria(){

     const opts = {
         playerVars: {
           controls: 1,
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
            <h1>{"Nossa História"}</h1>
            <p>
              Fundada em 1 de abril de 1970 por Celso Rodrigues, a Transporte Rodrimar é uma história de determinação, paixão e comprometimento que começou há mais de cinco décadas na cidade de Lavras. Com sua visão e expertise, constituiu uma empresa que rapidamente se destacou no setor de transporte.
            </p>

            <p>
              Desde o início, a missão da Rodrimar tem sido oferecer serviços de transporte de alta qualidade, baseados em princípios sólidos de confiabilidade e excelência.
              O fundador Celso trouxe sua visão e expertise para criar uma empresa que rapidamente se destacou como um pilar da comunidade de Lavras e uma referência no setor de transporte.
            </p>
            </Left>
            <Right>
            <img src={newLogoWhiteNoBG}/>
            <YouTube videoId="4Se-PKhXZhU" opts={opts}/>
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
        font-size: 3.3vh;
        font-weight: 600;
        width: 100%;
        margin: 0 3vw;
        margin-top:10vh;
        color:white;
        height:32px;
    }
    p {
    color: white;
    margin: 4.2vh 3vw;
    font-size:2vh;
    line-height: 1.5;
    width:30vw;
  }
  @media (max-width: 1200px) {
  display:flex;
  flex-direction: column;
  width: 100%;
  h1{
    margin-top: 5vh;
    font-size:6.3vw;
    width:80vw;
  }
    p{
      font-size:1.6vh;
      height:10vh;
      width:80vw;
      margin: 3vh 0 30px 13px;
    }
  }
`

const Left = styled.div`
width:40vw;
backdrop-filter: blur(5px);
img{
    margin-left: 13.5vw;
    width:8vw;
    height:15vh;
    margin-top: -2vh;
    @media (max-width:1200px) {
      display:none;
      
    }
    &:hover {
    transform: scale(1.05);
  }

}
@media (max-width:1200px) {
  display: flex;
  flex-direction: column;
  margin:2vh 4vw;
  line-height: 30px;
}
`
const Right = styled.div`
width:40vw;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
backdrop-filter: blur(5px);
img{
  width: 33.7vw;
  height: 7vw;
  margin-bottom: 3vh;
}
iframe{
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    height: 36vh;
    width: 31.7vw;
    @media (max-width: 1200px) {
    width: 77vw;
    height: 20vh;
    margin-top: -3vh;
  }}
  @media (max-width: 1200px) {
    width:40vw;
    height:40vw;
    backdrop-filter: none;
    margin:auto;
    
  }

`


