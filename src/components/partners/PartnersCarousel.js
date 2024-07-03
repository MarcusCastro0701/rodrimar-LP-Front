import styled from "styled-components";
import { MdAgriculture } from "react-icons/md";
import { MdRecycling } from "react-icons/md";
import { MdOutlineBlinds } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { GiFallingRocks } from "react-icons/gi"; 

export default function PartnersCarousel(){

    const width = window.innerWidth;
    
    if(width > 1200){

        return (
            <Container>
                <h1>{"NOSSOS SEGMENTOS"}</h1>
                <RowContainer>
                    <div>
                        <Agro/>
                        <p>AGRONEGÓCIO</p>
                    </div>
                    
                    <div>
                        <Recycle/>
                        <p>RESÍDUOS</p>
                    </div>
                    
                    <div>
                        <Rocks/>
                        <p>MINÉRIOS</p>
                    </div>
                    
                    <div>
                        <Ceramics/>
                        <p>CERÂMICA</p>
                    </div>
                    
                    <div>
                        <Metal/>
                        <p>METALURGIA</p>
                    </div>
                </RowContainer>
            </Container>
        )

    }else{
        return (
            <Container>
                <h1>{"NOSSOS SEGMENTOS"}</h1>
                <RowContainer>
                    <div>
                        <Agro/>
                        <p>AGRONEGÓCIO</p>
                    </div>
                    
                    <div>
                        <Recycle/>
                        <p>RESÍDUOS</p>
                    </div>
                    
                    
                    <div>
                        <Metal/>
                        <p>METALURGIA</p>
                    </div>
                </RowContainer>

                <RowContainer>
                    
                    <div>
                        <Rocks/>
                        <p>MINÉRIOS</p>
                    </div>
                    
                    <div>
                        <Ceramics/>
                        <p>CERÂMICA</p>
                    </div>
                    
                </RowContainer>
            </Container>
        )
    }
    
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
const RowContainer = styled.div`
    width: 80%;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    p{
        font-size: 21px;
        color: #041c44;
        margin-top: 15px;
    }
    @media (max-width: 850px) {
        height: 90px;
        column-gap: 6vw;
        p{
            font-size: 13px;
        }
    }
`

const Agro = styled(MdAgriculture)`
width: 150px;
height: 150px;
color: #041c44;
@media (max-width: 1200px) {
    width: 70px;
    height: 70px;
    }
`

const Recycle = styled(MdRecycling)`
width: 150px;
height: 150px;
color: #041c44;
@media (max-width: 1200px) {
    width: 70px;
    height: 70px;
    }
`

const Rocks = styled(GiFallingRocks)`
width: 150px;
height: 150px;
color: #041c44;
@media (max-width: 1200px) {
    width: 70px;
    height: 70px;
    }
`

const Ceramics = styled(MdOutlineBlinds)`
width: 150px;
height: 150px;
color: #041c44;
@media (max-width: 1200px) {
    width: 70px;
    height: 70px;
    }
`

const Metal = styled(GiFactory)`
width: 150px;
height: 150px;
color: #041c44;
@media (max-width: 1200px) {
    width: 70px;
    height: 70px;
    }
` 

