import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import scroll from "../hooks/Scroll";
import caminhao2 from "../assets/images/caminhao2.jpg"
import confraternizacao2 from "../assets/images/confraternizacao-2.jpg"
import iso from "../assets/images/iso.jpg"
import frota2 from "../assets/images/frota-2.jpg"
import rodrimarWhiteBG from "../assets/images/rodrimarWhiteBG.jpg"
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";


export default function News(){

  const noticias = [
    { 
      titulo: 'Implantação da ISO 9001', 
      texto: 'A Transporte Rodrimar eleva seus padrões de qualidade e inicia a implantação da ISO 9001 para excelência operacional. A empresa reforça seu compromisso com a qualidade e dá um passo estratégico em suas operações, solidificando seu comprometimento em oferecer serviços de transporte que atendam aos mais altos padrões de qualidade.', 
      imagem: iso 
    },

    { 
      titulo: 'Expansão da frota', 
      texto: 'A Transporte Rodrimar alcança novos níveis de excelência com a chegada do poderoso Scania Super 460 R à sua Frota. Esta aquisição não apenas fortalece o compromisso da empresa com a inovação, mas também promete elevar os padrões de desempenho logístico a novos patamares. Este é um passo significativo para garantir que os clientes da transportadora continuem desfrutando de serviços de alta qualidade, pontualidade e eficiência.', 
      imagem: frota2
    },

    { 
      titulo: 'Confraternização de fim de ano', 
      texto: 'Todo fim de ano, a Transporte Rodrimar realiza a confraternização da empresa, com os diretores, colaboradores do escritório, motoristas e suas famílias. Com a contribuição de alguns fornecedores e a vinda do Papai Noel, a empresa distribuiu presentes a todas as crianças presentes no local.',
      imagem: confraternizacao2 
    },

    { 
      titulo: 'Transformação em Curso', 
      texto: 'A Transporte Rodrimar embarca em uma jornada de renovação de identidade visual para refletir o futuro inovador. Esta reestruturação representa um capítulo emocionante e transformador em sua trajetória, prometendo um futuro vibrante e alinhado com as demandas do mercado global.',
      imagem: rodrimarWhiteBG
    },
    
  ];

  const [noticiaAtual, setNoticiaAtual] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
 
      setNoticiaAtual((prevNoticia) =>
        prevNoticia === noticias.length - 1 ? 0 : prevNoticia + 1
      );
    }, 20000);

    return () => clearInterval(intervalId);

  }, []);

  function avancarNoticia(){
    setNoticiaAtual((prevNoticia) =>
      prevNoticia === noticias.length - 1 ? 0 : prevNoticia + 1
    );
  };

  function retrocedeNoticia(){
    setNoticiaAtual((prevNoticia) =>
      prevNoticia === 0 ? noticias.length - 1 : prevNoticia - 1
    );
  };

    return(
      
        <MainContainer>

          <h1>Ultimas notícias</h1>

          <SubContainer id="1">

              <Left>

                <h2>{noticias[noticiaAtual].titulo}</h2>

                <p>{noticias[noticiaAtual].texto}</p>

              </Left>

              <Right>

                <img src={noticias[noticiaAtual].imagem}/>

              </Right>

          </SubContainer >

          <ArrowContainer>
            <LeftArrow onClick={retrocedeNoticia}/>
            <RightArrow onClick={avancarNoticia}/>
          </ArrowContainer>

        </MainContainer>



    )

}

const MainContainer = styled.div`
width: 100%;
height: 90vh;
background: linear-gradient(to right,rgba(4, 28, 68, 1),rgba(4, 28, 68, 0.6)), url("https://img.freepik.com/fotos-gratis/veiculo-de-caminhao-longo-pronto-para-entrega-e-transporte_342744-1294.jpg?w=1380&t=st=1693518357~exp=1693518957~hmac=52dfcf984acf66992463f98a8b5085988eb64367a3b6567f02c5127d43f57ef9") no-repeat center center / cover;
box-shadow: rgba(0,0,0) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 7vh 0 5vh 0;
h1{
  color: white;
  font-size: 6vh;
  font-weight: 500;
}
@media (max-width: 1200px) {
  margin: 0;
  }
`
const ArrowContainer = styled.div`
margin-top: 4vh;
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
const Left = styled.div`
width:40vw;
@media (max-width:1200px) {
width: 90vw;
margin-bottom: 15vh;
}
`
const Right = styled.div`
width:40vw;
display:flex;
align-items:center;
justify-content: center;
margin-left: 3vh;
img{
    max-height: 60vh;
    min-width: 48vh;
    border-radius: 15px;
  }
  @media (max-width: 1200px) {
    backdrop-filter: none;
    margin-left: 0;
    img{
    max-height: 22vh;
    min-width: 15vh;
    max-width: 28vh;
    border-radius: 15px;
  }
  }


`
const LeftArrow = styled(IoIosArrowDropleft)`
  font-size: 3.5vh;
  color: white;
  transition: transform 0.2s; 
  
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const RightArrow = styled(IoIosArrowDropright)`
  font-size: 3.5vh;
  color: white;
  transition: transform 0.2s; 
  margin-left: 2.9vh;
  
  
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

