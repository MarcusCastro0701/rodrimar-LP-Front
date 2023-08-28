import styled, { createGlobalStyle } from "styled-components";
import { FaWhatsapp } from 'react-icons/fa';
import Header from "./Header";
import { AutoComplete } from 'primereact/autocomplete';
import Timeline from "./Timeline";

export default function Home() {
  const whatsappNumber = "+5535910185219";
  const whatsappMessage = `Olá equipe AlphaWeb,

  espero que esteja tudo bem com vocês! Estou entrando em contato porque estou interessado em contratar os serviços de Desenvolvimento Web e Marketing Digital oferecidos pela AlphaWeb.`;

  return (
    <Container>
      <Header />
      <Timeline />
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
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out; 


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
