import styled from "styled-components";
import PartnerCard from "./PartnerCard";
import { useState } from "react";

export default function PartnersCarousel(){

    const [ animationState, setAnimationState ] = useState(true)
    const PartnersList = [
        {
            imageUrl: "https://defexpress.com.br/wp-content/webp-express/webp-images/uploads/2023/06/Sem-Titulo-2.png.webp"
        },
        {
            imageUrl: "https://defexpress.com.br/wp-content/webp-express/webp-images/uploads/2023/06/Sem-Titulo-22.png.webp"
        },
        {
            imageUrl: "https://defexpress.com.br/wp-content/webp-express/webp-images/uploads/2023/06/Sem-Titulo-23.png.webp"
        },
        {
            imageUrl: "https://defexpress.com.br/wp-content/webp-express/webp-images/uploads/2023/06/Sem-Titulo-236.png.webp"
        },
        {
            imageUrl: "https://defexpress.com.br/wp-content/webp-express/webp-images/uploads/2023/06/Sem-Titulo-2368.png.webp"
        },
        {
            imageUrl: "https://defexpress.com.br/wp-content/webp-express/webp-images/uploads/2023/06/Sem-Titulo-2368567567.png.webp"
        },
    ]

    function FormatPartnersList(list){
        if(list.length <= 5){
            return [...list, ...list]
        }
        return [...list, list[0], list[1], list[2], list[3], list[4]]
    }

    return (
        <Container>
            <h1>{"CONHEÇA NOSSOS PARCEIROS"}</h1>
            <CarouselContainer onMouseEnter={() => setAnimationState(false)} onMouseLeave={() => setAnimationState(true)}>
                {FormatPartnersList(PartnersList)?.map( (e, i) => 
                    <PartnerCard key={i} partnerData={e} animationState={animationState} />
                )}
            </CarouselContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 5vh 0vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 10vh;
    h1 {
        padding-left: 1vw;
        border-left: 8px solid #0f014dff;
        font-size: 32px;
        font-weight: 600;
        width: 100%;
        margin: 0 10vw;
    }
`
const CarouselContainer = styled.div`
    width: 100%;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: left;
    column-gap: 3vw;
    overflow-x: hidden;
    overflow-y: hidden;
    :hover {
        animation-play-state: paused;
    }
`