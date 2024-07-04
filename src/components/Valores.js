import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import {BsArrowDownShort} from "react-icons/bs";
import {TbTargetArrow} from "react-icons/tb";
import {AiOutlineEye} from "react-icons/ai"
import {BiDonateHeart} from "react-icons/bi"
import scroll from "../hooks/Scroll";
import caminhao3 from "../assets/images/caminhao3.jpg";
import { FaCheck } from "react-icons/fa6";



export default function Valores(){

    return(
        <Container>
            <span>
                <SubContainer>
                    <div>
                        <Target/>
                        <h1>MISSÃO</h1>
                    </div>
                    <p>
                    Atender as necessidades dos nosso clientes, oferecendo serviços de qualidade, transportando com segurança e gerando valores sustentáveis a todas as partes.
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
            </span>

            <SubContainerValues>

                <div>
                    <Values/>
                    <h1>VALORES</h1>
                </div>

                <h2>
                    {<Check/>} Pessoas
                </h2>
                <p>
                    As pessoas certas para as funções certas são imprescindíveis para o sucesso da empresa.
                </p>

                <h2>
                    {<Check/>} Comprometimento
                </h2>
                <p>
                    Fazer o seu melhor, executar o seu trabalho com assertividade e buscar sempre o melhor resultado.
                </p>

                <h2>
                    {<Check/>} Responsabilidade
                </h2>
                <p>
                    cumprir todas as obrigações.
                </p>

                <h2>
                    {<Check/>} Profissionalismo
                </h2>
                <p>
                respeitar as normas da empresa e manter um bom relacionamento interpessoal.
                </p>

                <h2>
                    {<Check/>} Sustentabilidade
                </h2>
                <p>
                    focar no crescimento a longo prazo, com práticas sustentáveis e ações que reduzam os impactos socioambientais. 
                </p>

            </SubContainerValues>

        </Container>
    )

}

const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: white;
    background-image: url(${caminhao3});
    background-size: cover; 
    background-position: center; 
    position: relative;
    padding: 4vh 0;
    z-index: 1 !important;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    &::before {
        content: '';
        background-color: rgba(255, 255, 255, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1 !important;
    }
    @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    justify-content: space-evenly;
    span{
        flex-direction: column;
    }
}   
`
const SubContainer = styled.div`
    z-index: 10 !important;
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
    position: relative;
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
    margin: 5vh 0 0 0;
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
const SubContainerValues = styled.div`
    z-index: 10 !important;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgba(210, 210, 210, 0.7);
    border-radius: 10px;
    height: auto;
    width: auto;
    margin: 5vh 0 0 0;
    max-width: 90vh;
    padding: 15px 10px 40px 10px;
    text-align: center;
    position: relative;
    cursor: pointer;
    border: 4px solid rgba(4, 28, 68, 0.95);
    &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.03);
  }
  @media (max-width: 1200px) {
    width: 90%;
    height: auto; 
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
    h1{
        font-size: 42px;
        color: #041c44;
        font-weight: 700;
        @media (max-width: 1200px) {
            font-size: 25px;
            text-align: center;
}
    }
    h2{
        font-size: 35px;
        color: black;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 45px;
        @media (max-width: 1200px) {
            font-size: 23px;
}
    }
    p{
        font-size: 20px;
        color: black;
        font-weight: 500;
        display: flex;
        align-items: center;
        max-width: 75%;
        @media (max-width: 1200px) {
            font-size: 1.8vh;
            max-width: 85%;
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
const Check = styled(FaCheck)`
    height: 40px;
    width: 40px;
    color: #041c44;
    margin: 0 25px 0 0;
    cursor: pointer;
    @media (max-width: 1200px) {
    width: 30px;
    height: 30px; 
    margin: 0 10px 0 0;
}
`