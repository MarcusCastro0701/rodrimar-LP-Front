import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import {MdHistoryEdu} from "react-icons/md"
import rodrimar from "../assets/images/rodrimarNoBG.png"
import YouTube from 'react-youtube';
export default function NossaHistoria(){

     const opts = {
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
            <h1>{"Nossa História"}</h1>
            <p>Fundada em 2 de maio de 1970 por Celso Rodrigues, a Rodrimar de Transporte é uma história de determinação, paixão e comprometimento que começou há mais de cinco décadas na cidade de Lavras.<br></br>
            Desde o início, a missão da Rodrimar tem sido oferecer serviços de transporte de alta qualidade, baseados em princípios sólidos de confiabilidade e excelência.
             O fundador Celso trouxe sua visão e expertise para criar uma empresa que rapidamente se destacou como um pilar da comunidade de Lavras e uma referência no setor de transporte.
    </p>
    <img src={rodrimar}/>
            </Left>
            <Right>
            <YouTube videoId="4Se-PKhXZhU" opts={opts}/>
            </Right>
        </Container >

    )

}


const Container = styled.div `
display: flex;
justify-content:center;
width: 99.2vw;
height: 80vh;
background: linear-gradient(to right,rgba(15, 1, 77, 0.85)50%,rgba(15, 1, 77, 0.85)50%), url("https://img.freepik.com/fotos-gratis/foto-de-uma-estrada-rodeada-por-campos-de-grama-seca-sob-um-ceu-durante-o-por-do-sol_181624-10934.jpg?w=1380&t=st=1693771873~exp=1693772473~hmac=876cfd89527b8c9d51114d8660786ae48aecc6a5090b47a51854055fe368b522") no-repeat center center / cover;
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
    margin: 10vh 3vw;
    font-size:22px;
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
img{
    margin-left: 5vw;
}
`
const Right = styled.div`
width:40vw;
display:flex;
justify-content:center;
align-items:center;
backdrop-filter: blur(5px);
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


