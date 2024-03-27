import { FaWhatsapp } from 'react-icons/fa';
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "./Header";
import Timeline from "./Timeline";

export default function Home() {
  const whatsappNumber = "+553599716386";
  const whatsappMessage = `Olá, eu gostaria de fazer uma cotação com o comercial da Rodrimar.`;

  return (
    <Container>
      <Header />
      <Timeline />
      <Footer/>
      <WhatsAppButton
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        onClick={(e) => e.stopPropagation()}
      >
        <FaWhatsapp size={30} color="white" />
      </WhatsAppButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 7vw;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out; 
  z-index: 100000000;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 128, 0, 0.3);
    transform: scale(1.1);
  }


  &:active {
    box-shadow: 0 1px 3px rgba(0, 128, 0, 0.3);
    transform: scale(0.9);
  }

  svg {
    transition: all 0.2s ease-in-out; 
  }


  &:hover svg {
    transform: scale(1.1);
  }


  &:active svg {
    transform: scale(0.9);
  }
`;
