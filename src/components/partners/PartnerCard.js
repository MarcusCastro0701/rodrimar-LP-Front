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
        transform: translateX(calc((-100% - 3vw) * (16)));
    }
`;
const Container = styled.div`
    width: 280px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${sliding} 20s linear infinite;
    animation-play-state: ${props => props.teste ? ("initial"):("paused")};
    img {
        max-width: 280px;
        max-height: 190px;
        cursor: pointer;
    }
    @media (max-width: 850px) {
        img {
            max-width: 150px;
            max-height: 190px;
        }
    }
`