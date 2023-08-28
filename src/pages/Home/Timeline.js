import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import SobreNos from "../../components/SobreNos";
import Inicio from "../../components/Inicio";
import Equipe from "../../components/Equipe";
import Servicos from "../../components/Servicos";
import Footer from "../../components/Footer";

export default function Timeline() {

  return (
    <MainContainer>
      <Inicio/>
      <SobreNos/>
      <Equipe/>
      <Servicos/>
      <Footer/>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  z-index: 0;
`;
