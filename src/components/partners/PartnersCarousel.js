import styled from "styled-components";
import PartnerCard from "./PartnerCard";
import { useState } from "react";
import PARTNER_LIST from "./partnerList"

export default function PartnersCarousel(){

    const [ animationState, setAnimationState ] = useState(true)

    function FormatPartnersList(list){
        return [...list, ...list]
    }
    const result = FormatPartnersList(PARTNER_LIST)
    return (
        <Container>
            <h1>{"CONHEÇA NOSSOS PARCEIROS"}</h1>
            <CarouselContainer onMouseEnter={() => setAnimationState(false)} onMouseLeave={() => setAnimationState(true)}>
                {result?.map( (e, i) => 
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
    @media (max-width: 850px) {
        padding: 1.2vh 0;
        padding-bottom: 4vh;
        width: 100%;
        row-gap: 4vh;
        h1 {
            font-size: 19px;
            padding: .5vh 0;
            padding-left: 2vw;
            margin: 5vw;
        }
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
    @media (max-width: 850px) {
        height: 90px;
        column-gap: 6vw;
    }
`