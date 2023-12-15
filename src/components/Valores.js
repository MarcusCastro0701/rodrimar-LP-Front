import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import {BsArrowDownShort} from "react-icons/bs";
import {TbTargetArrow} from "react-icons/tb";
import {AiOutlineEye} from "react-icons/ai"
import {BiDonateHeart} from "react-icons/bi"
import scroll from "../hooks/Scroll";
import caminhao3 from "../assets/images/caminhao3.jpg";


export default function Valores(){

    return(
        <Container>
            
            <SubContainer>
                <div>
                    <Target/>
                    <h1>MISSÃO</h1>
                </div>
                <p>
                    Oferecer serviços logísticos de transporte de cargas, priorizando qualidade, segurança e agilidade, garantindo assim a satisfação dos parceiros e clientes.
                </p>
            </SubContainer>

            <SubContainer>
                <div>
                    <Eye/>
                    <h1>VISÃO</h1>
                </div>
                <p>
                    Ser uma transportadora de referência no mercado nacional, reconhecida pela excelência dos serviços prestados.
                </p>
            </SubContainer>

            <SubContainer>
                <div>
                    <Values/>
                    <h1>VALORES</h1>
                </div>
                <p>
                    Comprometimento, responsabilidade, ética, profissionalismo, excelência e sustentabildiade.
                </p>
            </SubContainer>

        </Container>
    )

}

const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 900px;
    background-color: white;
    background-image: url(${caminhao3});
    background-size: cover; 
    background-position: center; 
    position: relative;
    &::before {
        content: '';
        background-color: rgba(255, 255, 255, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    @media (max-width: 1200px) {
    flex-direction: column;
    height: 1200px;
    justify-content: space-evenly;
}
    
`
const SubContainer = styled.div`
    z-index: 10;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 20px 0 20px;
    background-color: rgba(210, 210, 210, 0.7);
    border-radius: 10px;
    height: 700px;
    width: 400px;
    padding: 15px 20px 0 20px;
    text-align: center;
    cursor: pointer;
    border: 4px solid rgba(4, 28, 68, 0.95);
    &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.03);
  }
  @media (max-width: 1200px) {
    width: 90%;
    height: 300px; 
    padding: 5px 20px 20px 20px;
}
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 150px;
        border-radius:10px;
        margin-bottom: 60px;
        cursor: pointer;
        @media (max-width: 1200px) {
        height: 80px; 
        margin-bottom: 15px;
    }
    }
    p{
        font-size: 28px;
        color: black;
        font-weight: 500;
        line-height: 50px;
        @media (max-width: 1200px) {
            font-size: 20px;
            line-height: 25px;
}
    }
    h1{
        font-size: 42px;
        color: #041c44;
        font-weight: 700;
        @media (max-width: 1200px) {
            font-size: 25px;
            text-align: center;
}
    }
`

const Eye = styled(AiOutlineEye)`
    height: 100px;
    width: 100px;
    color: #041c44;
    margin-top: 15px;
    cursor: pointer;
    @media (max-width: 1200px) {
    width: 80px;
    height: 80px; 
}
`
const Target = styled(TbTargetArrow)`
    height: 100px;
    width: 100px;
    color: #041c44;
    margin-top: 15px;
    cursor: pointer;
    @media (max-width: 1200px) {
    width: 80px;
    height: 80px; 
}
`
const Values = styled(BiDonateHeart)`
    height: 100px;
    width: 100px;
    color: #041c44;
    margin-top: 15px;
    cursor: pointer;
    @media (max-width: 1200px) {
    width: 80px;
    height: 80px; 
}
`