import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import styled from "styled-components";
import rodrimarNoBG from "../assets/images/newLogoTRWhiteNoBG1.png";
import scroll from "../hooks/Scroll";

export default function Footer(){
  const instagram = "https://www.instagram.com/transporterodrimar/"
  const whatsappNumber = "+553538216262";
  const whatsappMessage = `Olá, eu gostaria de fazer uma cotação com o comercial da Rodrimar.`;

  const handleItemClick = (item) => {
    scroll(item.position);
  };

  return (
    <Container>

      <TitleContainer>
        <h3>{"Conecte-se Conosco"}</h3>
        <SocialContainer>
          <a href={instagram} target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
          <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            onClick={(e) => e.stopPropagation()} rel="noopener noreferrer"><BsWhatsapp/></a>
        </SocialContainer>
      </TitleContainer>

      <SubContainer>
        <ImageContainer>
          <img src={rodrimarNoBG} alt="" />
        </ImageContainer>

        <TextColumn>
          <h4>{"Nosso Site"}</h4>
          <h5 onClick={() => handleItemClick({position: 0})}>{"Página Inicial"}</h5>
          <h5 onClick={() => handleItemClick({position: 800})}>{"Sobre nós"}</h5>
          <h5 onClick={() => handleItemClick({position: 1650})}>{"Valores"}</h5>
          <h5 onClick={() => handleItemClick({position: 2500})}>{"História"}</h5>
          <h5 onClick={() => handleItemClick({position: 3240})}>{"Contato"}</h5>
        </TextColumn>

        <TextColumn>
          <h4>{"Contato"}</h4>
          <h5>{"Email: comercial@rodrimar.net"}</h5>
          <h5>{"Endereço: Rua Rosa Kasinski, 1195 - Distrito Industrial, Lavras - MG, 37205-842"}</h5>
          <h5>{"Telefone: (35) 3821-6262"}</h5>
        </TextColumn>

      </SubContainer>

      <AboutContainer>
        <span>{"Todos Direitos Reservados ©"}</span>
        <a href={'https://www.alphawebrasil.com.br'} target='_blank'>{"Desenvolvido por AlphaWeb"}</a>
      </AboutContainer>

    </Container>
  )
}

const Container = styled.footer`
  background-color: #041c44;
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
    font-size: 24px;
  }
  svg {
    font-size: 27px;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    > h3 {
      font-size: 20px;
    }
    svg {
      font-size: 24px;
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
    height: 15vh;
    width: 20vh;
    
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
    font-size: 22px;
    font-weight: 600;
  }
  h5 {
    font-size: 16px;
    max-width: 300px;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    width: auto;
    max-width: 58%;
    h5 {
      width: 90%;
      font-size: 12px;
    }
    h4 {
      font-size: 20px;
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
    cursor: pointer;
  }
  @media (max-width: 850px) {
    font-size: 15px;
  }
`