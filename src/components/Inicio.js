import styled from "styled-components";
import React, { useState } from 'react';
import {BsArrowDownShort} from "react-icons/bs"
import scroll from "../hooks/Scroll";


export default function Inicio(){

    return(
        <Container>
            <SubContainer>
                <h1>
                    Desenvolvendo e aplicando 
                </h1>
                <p>
                    com o melhor método.
                </p>
                <h2>
                    Transforme sua presença online conosco: desenvolvimento web e marketing digital que impulsionam o seu negócio.
                </h2>
                <div onClick={() => scroll(710)}>
                    CONHEÇA A ALPHAWEB
                </div>
                <Icone onClick={() => scroll(710)}/>
            </SubContainer>

        </Container>
    )

}

const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 700px;
    margin-top: 60px;
    border-radius: 15px;
    p{
        font-size: 20px;
        color: #1F22DA;
    }
    @media (max-width: 1200px) {
    margin-top: -90px;
}
    
`
const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        font-size: 40px;
        color: #1F22DA;
        margin-top: 8px;
        font-weight: 700;
        @media (max-width: 1200px) {
            font-size: 30px;
}
    }
    h1{
        margin-top: 0px;
        font-size: 40px;
        color: #1F22DA;
        font-weight: 700;
        @media (max-width: 1200px) {
            font-size: 30px;
            text-align: center;
}
    }
    h2{
        margin: 60px 0 60px 0;
        font-size: 23px;
        color: #1F22DA;
        width: 600px;
        text-align: center;
        @media (max-width: 1200px) {
            font-size: 20px;
            width: 100%;
}
    }
    div{
        width: 300px;
        height: 50px;
        color: #1F22DA;
        background-color: #1F22DA;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

const Icone = styled(BsArrowDownShort)`
    height: 50px;
    width: 50px;
    color: #1F22DA;
    margin-top: 15px;
    cursor: pointer;
`