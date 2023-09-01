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
    margin-top: -90px;
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
    border: 4px solid rgba(15, 1, 77, 0.7);
    &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.03);
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
    }
    p{
        font-size: 25px;
        color: black;
        font-weight: 500;
        line-height: 50px;
        @media (max-width: 1200px) {
            font-size: 30px;
}
    }
    h1{
        font-size: 40px;
        color: #0F014D;
        font-weight: 700;
        @media (max-width: 1200px) {
            font-size: 30px;
            text-align: center;
}
    }
`

const Eye = styled(AiOutlineEye)`
    height: 100px;
    width: 100px;
    color: #0F014D;
    margin-top: 15px;
    cursor: pointer;
`
const Target = styled(TbTargetArrow)`
    height: 100px;
    width: 100px;
    color: #0F014D;
    margin-top: 15px;
    cursor: pointer;
`
const Values = styled(BiDonateHeart)`
    height: 100px;
    width: 100px;
    color: #0F014D;
    margin-top: 15px;
    cursor: pointer;
`