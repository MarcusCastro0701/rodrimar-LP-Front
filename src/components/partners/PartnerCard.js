import styled, { keyframes } from "styled-components";

export default function PartnerCard({partnerData, animationState}){
    return (
        <Container teste={animationState}>
            <img src={partnerData?.imageUrl} alt="" />
        </Container>
    )
}

const sliding = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc( 6 * (-100% - 3vw)));
    }
`;
const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${sliding} 16s linear infinite;
    animation-play-state: ${props => props.teste ? ("initial"):("paused")};
    img {
        max-width: 380px;
        max-height: 190px;
        cursor: pointer;
    }
`