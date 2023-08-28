import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import LoadServices from "./LoadServices";
import {HiCode} from "react-icons/hi"
import {GoGraph} from "react-icons/go"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Servicos(){
    const services = [
      {  name:"Marketing",
        description:`
        Tráfego Pago  
        _Gerenciamento de Redes Sociais 
        _Criação de Logo
        _Gerenciamento de criativos`,
        icon:<GoGraph color={"#1F22DA"} fontSize={"5vh"}/>},
      {  name:"Programação",
        description:`
        Criação de Websites
        _Criação de E-Commerce
        _Criação de Sistemas de Gerenciamento
        _Personalização e Adaptação das Aplicações`,
      icon:<HiCode color={"#1F22DA"} fontSize={"5vh"}/>}]
    

    return(
        <Container>
       <p>Serviços</p>
      <Services>
      {services.map((item)=> <LoadServices key={item.id} name={item.name} description={item.description.split("_")} icon={item.icon} />)}
      </Services>
        </Container>
    )

}

const Container = styled.div `
display: flex;
margin-top: 25px;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 900px;
margin: 60px 0 80px 0;
p{
    font-size: 60px;
    color: #1F22DA;
    @media(max-width: 1200px) {
      font-size: 40px;
}
}
@media(max-width: 1200px) {
  position:relative;
}
`
const Services = styled.div`
  height:65vh;
  width:80%;
  margin-top: 20px;
`
