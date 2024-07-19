import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import {BsArrowDownShort} from "react-icons/bs";
import {TbTargetArrow} from "react-icons/tb";
import {AiOutlineEye} from "react-icons/ai"
import {BiDonateHeart} from "react-icons/bi"
import scroll from "../hooks/Scroll";
import caminhao3 from "../assets/images/caminhao3.jpg";
import { FaCheck } from "react-icons/fa6";
import { FaArrowUpShortWide } from "react-icons/fa6";



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
                    Cumprir todas as obrigações.
                </p>

                <h2>
                    {<Check/>} Profissionalismo
                </h2>
                <p>
                    Respeitar as normas da empresa e manter um bom relacionamento interpessoal.
                </p>

                <h2>
                    {<Check/>} Sustentabilidade
                </h2>
                <p>
                    Focar no crescimento a longo prazo, com práticas sustentáveis e ações que reduzam os impactos socioambientais. 
                </p>

                </SubContainerValues>

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

            <SubContainerPolicy>

                <div>
                    <Arrow/>
                    <h1>POLÍTICA DE QUALIDADE</h1>
                </div>

                <p>
                    Assegurar a satisfação dos nossos clientes através do fornecimento de soluções logísticas sustentáveis. 
                </p>

                <h2>
                    Nossa política está estruturada em três princípios fundamentais:
                </h2>

                <p>
                    {<Check/>} Entender e atender as necessidades e expectativas dos nossos clientes e de partes interessadas;
                </p>

                <p>
                    {<Check/>} Incentivar e prover recursos para a melhoria contínua do sistema de gestão da qualidade;
                </p>

                <p>
                    {<Check/>} Comprometer-se com todos os requisitos legais e estatutários aplicáveis ao seu negócio.  
                </p>

            </SubContainerPolicy>

        </Container>
    )

}

const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: white;
    background-image: url(${caminhao3});
    background-size: cover; 
    background-position: center; 
    position: relative;
    padding: 4vh 0 4vh 0;
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
    align-items: center;
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
    height: 700px;
    width: auto;
    margin: 0vh 5vh 0vh 5vh;
    max-width: 60vh;
    padding-bottom: 40px;
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
    margin-top: 5vh !important;
    margin-bottom: 5vh !important
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 150px;
        border-radius:10px;
        margin-bottom: 40px;
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
        font-size: 22px;
        color: black;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 0px;
        @media (max-width: 1200px) {
            font-size: 23px;
            margin-top: 15px;
}
    }
    p{
        font-size: 15px;
        color: black;
        font-weight: 500;
        display: flex;
        align-items: center;
        max-width: 90%;
        margin-bottom: 15px;
        @media (max-width: 1200px) {
            font-size: 15px;
            max-width: 85%;
} 
    }
`
const SubContainerPolicy = styled.div`
    z-index: 10 !important;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgba(210, 210, 210, 0.7);
    border-radius: 10px;
    height: auto;
    width: 95% !important;
    margin: 5vh 5vh 0vh 5vh;
    padding-bottom: 0px;
    padding: 22px 40px 40px 40px;
    text-align: center;
    position: relative;
    //border: 4px solid rgba(4, 28, 68, 0.95);
  @media (max-width: 1200px) {
    width: 90%;
    height: auto; 
    padding: 23px 20px 20px 20px;
    margin-top: 5vh !important;
    border: 4px solid rgba(4, 28, 68, 0.95);
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
        font-size: 30px;
        color: black;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        margin-top: 0px;
        @media (max-width: 1200px) {
            font-size: 23px;
}
    }
    p{
        font-size: 22px;
        color: black;
        font-weight: 500;
        display: flex;
        align-items: center;
        max-width: 100%;
        margin-bottom: 20px;
        @media (max-width: 1200px) {
            font-size: 15px;
            max-width: 95%;
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
const Arrow = styled(FaArrowUpShortWide)`
    height: 100px;
    width: 100px;
    color: #041c44;
    cursor: pointer;
    @media (max-width: 1200px) {
    width: 80px;
    height: 80px; 
    margin-top: -10px;
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
    margin: 0 15px 0 0;
    cursor: pointer;
    @media (max-width: 1200px) {
    width: 30px;
    height: 30px; 
    margin: 0 10px 0 0;
}
`