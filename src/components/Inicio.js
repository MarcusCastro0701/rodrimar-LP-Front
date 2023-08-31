import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import {BsArrowDownShort} from "react-icons/bs";
import {TbTargetArrow} from "react-icons/tb";
import {AiOutlineEye} from "react-icons/ai"
import scroll from "../hooks/Scroll";
import caminhao2 from "../assets/images/caminhao2.jpg";
import caminhao from "../assets/images/caminhao.jpg";
import rodrimarNoBG2 from "../assets/images/rodrimarNoBG2.png";


export default function Inicio(){

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imageUrls = [
        caminhao2,
        caminhao2
      ];

    useEffect(() => {
        const timer = setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 6000);
      
        return () => clearTimeout(timer);
      }, [currentImageIndex]);

      const backgroundImageStyle = {
        backgroundImage: `url(${imageUrls[currentImageIndex]})`,
      };

    return(
        <Container style={backgroundImageStyle}>
            <SubContainer>
                <img src={rodrimarNoBG2}/>
                <h2>
                    Transporte de cargas feito com <b>dedicação</b>, <b>pontualidade</b> e <b>segurança</b>.
                </h2>
                <h2>
                    Aqui na <b>Rodrimar</b>, a sua <b>entrega</b> é a nossa <b>prioridade</b>.
                </h2>
                <div onClick={() => scroll(710)}>
                    CONHEÇA A RODRIMAR
                </div>
                <Icone onClick={() => scroll(710)}/>
            </SubContainer>

        </Container>
    )

}

const Container = styled.div `
    background-image: url(${caminhao2});
    background-size: cover; 
    background-position: center; 
    background-repeat: repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 930px;
    transition: background-image 2s ease-in-out;
    @media (max-width: 1200px) {
    margin-top: -90px;
}
    
`
const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 22px 100px 22px 100px;
    border-radius: 15px;
    p{
        font-size: 15px;
        color: black;
        margin-top: 8px;
        font-weight: 700;
        margin-bottom: 40px;
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
    h2{
        margin: 0px 0 15px 0;
        font-size: 18px;
        color: black;
        width: 700px;
        text-align: center;
        line-height: 20px;
        @media (max-width: 1200px) {
            font-size: 20px;
            width: 100%;
}
    }
    div{
        width: 300px;
        height: 50px;
        color: white;
        background-color: #0F014D;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 15px;
    }
    b{
    color: black;
    font-weight: 800;
    font-size: 18px;
    color: #0F014D;
}
`

const Icone = styled(BsArrowDownShort)`
    height: 50px;
    width: 50px;
    color: #0F014D;
    margin-top: 15px;
    cursor: pointer;
`