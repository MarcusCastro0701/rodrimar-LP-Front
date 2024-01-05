import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import SobreNos from "../../components/SobreNos";
import Inicio from "../../components/Inicio";
import PartnersCarousel from "../../components/partners/PartnersCarousel";
import Valores from "../../components/Valores"
import NossaHistoria from "../../components/NossaHistoria";
import Contato from "../../components/Contato";
import News from "../../components/News";


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
`;
