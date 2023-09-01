import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import SobreNos from "../../components/SobreNos";
import Inicio from "../../components/Inicio";
import Equipe from "../../components/Equipe";
import Servicos from "../../components/Servicos";
import PartnersCarousel from "../../components/partners/PartnersCarousel";
import Valores from "../../components/Valores"


export default function Timeline() {

  return (
    <MainContainer>
      <Inicio/>
      <SobreNos/>
      <Valores/>
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
