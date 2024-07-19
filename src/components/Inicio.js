import React, { useEffect, useState } from 'react';
import { BsArrowDownShort } from "react-icons/bs";
import styled from "styled-components";
import caminhao2 from "../assets/images/caminhao2.jpg";
import caminhao3 from "../assets/images/caminhao3.jpg";
import newLogoNoBG from "../assets/images/newLogoNoBG.png";
import scroll from "../hooks/Scroll";


export default function Inicio(){

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imageUrls = [
        caminhao2,
        caminhao3
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
                <img src={newLogoNoBG}/>
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
    margin-top: 0px !important;
    height: auto;
    padding: 6vh 0;
}
    
`
const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 22px 100px 22px 85px;
    border-radius: 15px;
    width: 80%;
    p{
        font-size: 17px;
        color: black;
        margin-top: 8px;
        font-weight: 700;
        margin-bottom: 40px;
        @media (max-width: 1200px) {
            font-size: 33px;
}
    }
    h1{
        font-size: 42px;
        color: #041c44;
        font-weight: 700;
        @media (max-width: 1200px) {
            font-size: 33px;
            text-align: center;
}
    }
    h2{
        margin: 0px 0 30px 0;
        font-size: 20px;
        color: black;
        width: 700px;
        text-align: center;
        line-height: 20px;
        @media (max-width: 1200px) {
            font-size: 20px;
            width: 90vw;
            b{
                font-size: 20px;
            }
}
    }
    div{
        width: 300px;
        height: 50px;
        color: white;
        background-color: #041c44;
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
    font-size: 21px;
    color: #041c44;
    }
    img{
    border-radius: 18px;
    @media (max-width: 1200px) {
        width: 350px;
        height: 110px;
        margin-bottom: 25px;
}
    }
@media (max-width: 1200px) {
    width: 100%;
    height: 50%;
}
`

const Icone = styled(BsArrowDownShort)`
    height: 50px;
    width: 50px;
    color: #041c44;
    margin-top: 15px;
    cursor: pointer;
`