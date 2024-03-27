import React from 'react';
import styled from "styled-components";
import Contato from "../../components/Contato";
import Inicio from "../../components/Inicio";
import News from "../../components/News";
import NossaHistoria from "../../components/NossaHistoria";
import SobreNos from "../../components/SobreNos";
import Valores from "../../components/Valores";
import PartnersCarousel from "../../components/partners/PartnersCarousel";


export default function Timeline() {

  return (
    <MainContainer>
      <Inicio/>
      <SobreNos/>
      <Valores/>
      <NossaHistoria/>
      <Contato/>
      <News/>
      <PartnersCarousel/>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 45px;
  z-index: 0;
  @media (max-width: 1200px) {
  padding-top: 0px !important;
}
`;
