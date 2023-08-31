import styled from "styled-components";
import rodrimarNoBG from "../assets/images/rodrimarNoBG.png"
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'

export default function Footer(){

  return (
    <Container>

      <TitleContainer>
        <h3>{"Conecte-se Conosco"}</h3>
        <SocialContainer>
          <BsInstagram/>
          <FaTiktok/>
          <BsWhatsapp/>
        </SocialContainer>
      </TitleContainer>

      <SubContainer>
        <ImageContainer>
          <img src={rodrimarNoBG} alt="" />
        </ImageContainer>

        <TextColumn>
          <h4>{"Nosso Site"}</h4>
          <h5>{"Página Inicial"}</h5>
          <h5>{"Nossos Serviços"}</h5>
          <h5>{"Fale Conosco"}</h5>
        </TextColumn>

        <TextColumn>
          <h4>{"Contato"}</h4>
          <h5>{"contato@transportadorarodrimar.com.br"}</h5>
          <h5>{"R. Rosa Kasinski, 1195 - Santa Teresinha, Lavras - MG, 37200-000"}</h5>
          <h5>{"(35) 3821-6088"}</h5>
        </TextColumn>

      </SubContainer>

      <AboutContainer>
        <span>{"Todos Direitos Reservados ©"}</span>
        <span>{"Desenvolvido por AlphaWeb"}</span>
      </AboutContainer>

    </Container>
  )
}

const Container = styled.footer`
  background-color: #0f014dff;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  padding: 2vh 10vw;
  color: #FFFFFF;
  row-gap: 4vh;
  @media (max-width: 850px) {
    padding: 2vh 5vw;
  }
`
const TitleContainer = styled.div`
  width: 100%;
  padding: 1.7vh 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #FFFFFF;
  > h3 {
    font-size: 21px;
  }
  svg {
    font-size: 25px;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    > h3 {
      font-size: 18px;
    }
    svg {
      font-size: 21px;
    }
  }
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.6vw;
  @media (max-width: 850px) {
    column-gap: 4vw;
  }
`
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5vw;
  @media (max-width: 850px) {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
const ImageContainer = styled.div`
  img {
    max-height: 100%;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    display: none;
  }
`
const TextColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 2vh;
  h4 {
    font-size: 20px;
    font-weight: 600;
  }
  h5 {
    font-size: 14px;
    max-width: 300px;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    width: auto;
    max-width: 58%;
    h5 {
      width: 90%;
      font-size: 11px;
    }
    h4 {
      font-size: 17px;
    }
  }
`
const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1vw;
  padding: 1.2vh 0;
  > :last-child {
    text-decoration: underline;
  }
  @media (max-width: 850px) {
    font-size: 12px;
  }
`