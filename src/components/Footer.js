import styled from "styled-components";
import rodrimarNoBG from "../assets/images/rodrimarNoBG.png"
import {BsInstagram} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

export default function Footer(){

return (
    <Rodape>
        <SubContainerLeft>
            <img src={rodrimarNoBG}/>
        </SubContainerLeft>
        <SubContainerRight>
            <p>2023 © Transporte Rodrimar. Todos os direitos reservados.</p>
            <Border/>
            <p>Mais de 50 anos de Solidez e Comprometimento.</p>
            <Border/>
            <Socials>
                <a target="_blank" rel="noopener noreferrer"> 
                    <Instagram/>
                </a>
                <a  target="_blank" rel="noopener noreferrer"> 
                    <Tiktok/>
                </a>
                <a  target="_blank" rel="noopener noreferrer"> 
                    <WhatsApp/>
                </a>
            </Socials>
        </SubContainerRight>
    </Rodape>
)

}

const Rodape = styled.footer`
background-color: #032453;
width: 100%;
height: 300px;
margin-top: 25px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
img{
    width: 150px;
}
@media (max-width: 1200px) {
    height: 250px;
  }
`

const SubContainerLeft = styled.div`
width: 15%;
height: 75%;
border-right: 1px solid grey;
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 30px;
p{
    color: white;
    font-size: 15px;
    font-weight: 100;
}
@media (max-width: 1200px) {
    padding-right: 15px;
    width: 35%;
  }
`

const SubContainerRight = styled.div`
width: 22%;
height: 75%;
padding-left: 25px;
border-left: 1px solid grey;
display: flex;
flex-direction: column;
justify-content: center;
p{
    color: white;
    font-size: 15px;
    font-weight: 100;
    @media (max-width: 1200px) {
    font-size: 10px;
  }
}
@media (max-width: 1200px) {
    width: 35%;;
  }
`
const Socials = styled.div`
height: 40px;
width: 95%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`
const Instagram = styled(BsInstagram)`
cursor: pointer;
width: 30px;
height: 30px;
color: white;
@media (max-width: 1200px) {
    width: 23px;
    height: 23px;
  }
`
const Tiktok = styled(FaTiktok)`
cursor: pointer;
width: 30px;
height: 30px;
color: white;
@media (max-width: 1200px) {
    width: 23px;
    height: 23px;
  }
`
const WhatsApp = styled(BsWhatsapp)`
cursor: pointer;
width: 30px;
height: 30px;
color: white;
@media (max-width: 1200px) {
    width: 23px;
    height: 23px;
  }
`

const Border = styled.div`
width: 97%;
height: 1px;
background-color: grey;
margin: 7px 0 10px 0;
`


