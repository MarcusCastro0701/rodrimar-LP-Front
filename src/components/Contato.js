import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import {FaSearchPlus, FaPhone} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import rodrimar from "../assets/images/rodrimarNoBGBlue.png"
import { MDBCol } from 'mdb-react-ui-kit';
export default function Contato(){
    const SearchIcon = styled(FaSearchPlus)`
      font-size: 30px;
      margin-right: 0.5vw;
      color: white;
      transition: transform 0.2s; 
      
      &:hover {
        transform: scale(1.1);
      }
    `;
  
   const PhoneIcon= styled(FaPhone)`
  font-size: 30px;
  margin-right: 0.5vw;
  color: white;
  transition: transform 0.2s; 
  
  &:hover {
    transform: scale(1.1);
  }
  `;

const EmailIcon= styled(MdEmail)`
font-size: 30px;
margin-right: 0.5vw;
color: white;
transition: transform 0.2s; 

&:hover {
  transform: scale(1.1);
}
`;



     const opts = {
         playerVars: {
           controls: 1,
           fs: 0,
           iv_load_policy: 3,
           modestbranding: 1,
           showinfo: 0,
           loop: 0,
           rel: 0,
         },
       };

    return(

        <Container id="1">
            <Left>
            <h1>{"Contato e endereço"}</h1>
            <MDBCol lg='6' className='my-4'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3718.030736127133!2d-44.978613!3d-21.2702509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffd88fff8038d%3A0x6203fb732a8a547a!2sTransporte%20Rodrimar!5e0!3m2!1spt-BR!2sbr!4v1693863803794!5m2!1spt-BR!2sbr'
          className='w-100'
          height='400'
          loading='lazy'
        ></iframe>
      </MDBCol>
            </Left>
            <Right>
            <p>
                <SearchIcon color={"#0F014D"}/>
                Endereço: Rua Rosa Kasinski, 1195 - Distrito Industrial,<br></br> Lavras - MG, 37205-842
            </p>
            <p>
            <PhoneIcon color={"#0F014D"}/>
            Telefone: (35) 3821-6262
            </p>
            <p>
                <EmailIcon color={"#0F014D"}/>
                Email: comercial@rodrimar.net 
            </p>

    <img src={rodrimar}/>
            </Right>
        </Container >

    )

}


const Container = styled.div `
display: flex;
justify-content:center;
width: 99.2vw;
height: 80vh;
background: linear-gradient(to right, rgba(255, 255, 255, 0.7)50%, rgba(255, 255, 255, 0.7)50%), url("https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center center / cover;
box-shadow: rgba(0,0,0) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
h1 {
        padding-left: 1vw;
        border-left: 8px solid #09DCFF;
        font-size: 32px;
        font-weight: 600;
        width: 100%;
        margin: 0 3vw;
        margin-top:10vh;
        color:rgb(15, 1, 77);
        height:32px;
    }
    p {
    color: rgb(15, 1, 77);
    margin: 2vh 3vw;
    font-size:25px;
    line-height: 1.5;
    font-weight: 700;
    width:30vw;
    display:flex;
    align-items:center;
  }
  @media (max-width: 1200px) {
    display:flex;
  flex-direction: column;
  width: 100%;
  h1{
    margin-top: 5vh;
    font-size:6vw;
    width:80vw;
  }
    p{
      font-size:1.6vh;
      height:10vh;
      width:80vw;
      margin: 3vh 3vw;
    }
  }
`

const Left = styled.div`
width:40vw;
backdrop-filter: blur(5px);
img{
    margin-left: 5vw;
    &:hover {
    transform: scale(1.1);
  }
}
iframe{
    border-radius: 10px;
    margin: 4vw 3vh;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    height: 40vh;
    width: 40vw;
    @media (max-width: 1200px) {
      height: 20vh;
    width: 75vw;
    margin-top: 5vh;
  }}
  @media (max-width:1200px) {
  margin:2vh 4vw;
}
`
const Right = styled.div`
width:40vw;
display:flex;
margin-left: 5vw;
justify-content:center;
flex-direction: column;
  img{
  margin-top: 50px !important;
  height:18vh;
  width:10vw;
  margin: 0 45%;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width:1200px) {
 display:none;
}
}
  p{
    font-size:1.4vw;
}
@media (max-width: 1200px) {
    width:40vw;
    height:40vw;
    backdrop-filter: none;
    margin:11vh 7vw;
    p{
      font-size:4.5vw;
    }
  }
`


