import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import styled from "styled-components";
import frota2 from "../assets/images/frota-2.jpg";
import iso from "../assets/images/iso.png";
import newLogo from "../assets/images/novaLogo.png";
import treinamentoISO from "../assets/images/treinamentoISO.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { Autoplay, Navigation, Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function News(){

  const noticias = [
    { 
      titulo: 'Implantação da ISO 9001', 
      texto: 'A Transporte Rodrimar eleva seus padrões de qualidade e inicia a implantação da ISO 9001 para excelência operacional. A empresa reforça seu compromisso com a qualidade e dá um passo estratégico em suas operações, solidificando seu comprometimento em oferecer serviços de transporte que atendam aos mais altos padrões de qualidade.', 
      imagem: iso 
    },

    { 
      titulo: 'Treinamento ISO 9001', 
      texto: 'No fim de fevereiro, demos início ao treinamento da ISO 9001, direcionado aos motoristas. A equipe administrativa preparou um café da manhã para motivar os colaboradores e foi um domingo super produtivo!',
      imagem: treinamentoISO
    },

    { 
      titulo: 'Transformação em Curso', 
      texto: 'A Transporte Rodrimar embarca em uma jornada de renovação de identidade visual para refletir o futuro inovador. Esta reestruturação representa um capítulo emocionante e transformador em sua trajetória, prometendo um futuro vibrante e alinhado com as demandas do mercado global.',
      imagem: newLogo
    },
    
  ];


    return(
      
        <MainContainer>

          <h1>Últimas notícias</h1>

          <SubContainer id="1">

          <StyledSwiperContainer
            freeMode={true}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            spaceBetween={'5'}
            modules={[Pagination, Navigation, Autoplay, FreeMode]}
          >

            

            {noticias.map((n) => (
              <StyledSwiperSlide>

              <h3>{n.titulo}</h3>

              <img alt='slide-img' src={n.imagem}/>

              <p>
                {n.texto}
              </p>

            </StyledSwiperSlide>
            ))}

          </StyledSwiperContainer>

          </SubContainer >


        </MainContainer>


    )

}

const MainContainer = styled.div`
width: 100%;
height: auto !important;
background: linear-gradient(to right,rgba(4, 28, 68, 1),rgba(4, 28, 68, 0.6)), url("https://img.freepik.com/fotos-gratis/veiculo-de-caminhao-longo-pronto-para-entrega-e-transporte_342744-1294.jpg?w=1380&t=st=1693518357~exp=1693518957~hmac=52dfcf984acf66992463f98a8b5085988eb64367a3b6567f02c5127d43f57ef9") no-repeat center center / cover;
box-shadow: rgba(0,0,0) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 7vh 0 5vh 0;
h1{
  color: white;
  font-size: 55px;
  font-weight: 500;
}
h3{
  color: white;
  font-size: 35px;
  font-weight: 500;
}
p{
  text-align: center;
  font-size: 20px !important;
  max-width: 80%;
}
@media (max-width: 1200px) {
  margin: 0;
  h1{
    font-size: 4vh;
  }
  h3{
    font-size: 25px;
  }
  p{
    font-size: 12px !important;
    max-width: 85%;
  }
  }
`

const SubContainer = styled.div `
display: flex;
width: 100%;
justify-content:center;
align-items: center;
margin-top: 9vh;
height: 50%;
h2 {
      padding-left: 1vw;
      border-left: 8px solid #09DCFF;
      font-size: 3.2vh;
      font-weight: 600;
      color:white;
      height:32px;
      margin-bottom: 8vh;
    }
    p {
    color: white;
    font-size:2vh;
    line-height: 1.5;
  }
@media (max-width: 1200px) {
  flex-direction: column;
  width: 100%;
  align-items: center;
  h1{
    margin-top: 5vh;
  }
    p{
      font-size:1.8vh;
      height:10vh;
      
    }
    h2{
      font-size: 2.8vh;
      height: 21px;
    }
  }
`

const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: none !important;
  padding-top: 2vh !important;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2%;
  transition: transform 0.8s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
      width: 614.4px !important;
      height: 345.6px;
      border-radius: 4%;
      margin: 30px 0;
  }
  @media (max-width: 1200px) {
    img{
      width: 230.4px !important;
      height: 129.6px;
    }
  }
`;

const StyledSwiperContainer = styled(Swiper)`
  max-width: 1152px !important;
  background-color: none !important;
  height: auto;
  margin-top: 1.5vh;
  padding-bottom: 60px;
  @media (max-width: 1500px) {
    padding-bottom: 100px;
    max-width: 90% !important;
  }
  .swiper-pagination-bullet {
    background: white;
  }
  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    width: 6vh;
    height: 6vh;
    border-radius: 25%;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    @media (max-width: 1500px) {
      width: 2.5vh;
      height: 2.5vh;
    }
    &:hover {
      cursor: pointer;
      scale: 1.05;
      border-radius: 40%;
    }
  }
`;

