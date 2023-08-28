import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import scroll from "../hooks/Scroll";

export default function SobreNos(){

    const height = Number(window.innerHeight);

     const opts = {
         playerVars: {
           controls: 0,
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

            <SubContainerLeft>
                <p>Serviços validados por</p>
                <h1>dezenas</h1>
                <p>de clientes.</p>
                <h2>
                    Acreditamos que <b>cada cliente é único</b>, assim como suas <b>necessidades</b> e <b>metas</b>. É por isso que <b>não</b> oferecemos <b>soluções genéricas</b>. 
                </h2>
                <h2>
                    Nossa equipe de gerentes e desenvolvedores trabalha <b>lado a lado com você</b>, para entender o <b>coração do seu negócio</b> e projetar <b>estratégias  e aplicações personalizadas</b> que o leve diretamente ao seu <b>público-alvo</b> e que torne suas <b>mediações</b> mais <b>práticas</b>.
                </h2>
                <div onClick={() => scroll(1750)}>
                    CONHEÇA A NOSSA EQUIPE
                </div>
                
            </SubContainerLeft>

            <SubContainerRight>
                <SubLine>
                    <p> O que nós fazemos? </p>
                </SubLine>
                <YouTube videoId="x6RgJ_IEtEA" opts={opts}/>
            </SubContainerRight>

        </Container >

    )

}

const SubLine = styled.div`
   p{
    font-size: 30px;
    color: #1F22DA;
    margin-bottom: 1.5vh;
}
`

const Container = styled.div `
display: flex;
flex-direction: row;
width: 1300px;
height: 600px;
margin: 60px 0 300px 0;
border-radius: 15px;
@media (max-width: 1200px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    width: 100%;
  }
`

const SubContainerLeft = styled.div`
width: 500px;
height: 100%;
padding: 45px;
@media (max-width: 1200px) {
    width: 100%;
  }
p{
    font-size: 37px;
    color: #1F22DA;
}
h1{
    font-size: 37px;
    color: #1F22DA;
}
h2{
    margin-top: 30px;
    font-size: 15px;
    color: #1F22DA;
    line-height: 20px;
    font-weight: 200;
}
b{
    color: #1F22DA;
    font-weight: 800;
}
div{
    width: 300px;
    height: 50px;
    color: #1F22DA;
    background-color: #1F22DA;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 60px;
    }
`
const SubContainerRight = styled.div`
width: 800px;
padding: 45px;
@media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
iframe{
    border-radius: 35px;
    border: 5px solid black;
    height: 400px;
    width: 700px;
    @media (max-width: 1200px) {
    width: 350px;
    height: 200px;
  }
    }
`
