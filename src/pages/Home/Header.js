import styled from "styled-components";
import React, { useState, useRef } from 'react';
import 'primeicons/primeicons.css';
import scroll from "../../hooks/Scroll";
import rodrimarNoBG from "../../assets/images/rodrimarNoBG.png";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item.item);
    scroll(item.position);
  };

  return (
    <Container>
      <HeaderItems>
        <Logo>
        <img
    src={rodrimarNoBG}
    alt="Logo"
  />
        </Logo>
        <div
          className={selectedItem === 'home' ? 'selected' : ''}
          onClick={() => handleItemClick({item: 'home', position: 0})}
        >
          Home
        </div>
        <div
          className={selectedItem === 'sobre' ? 'selected' : ''}
          onClick={() => handleItemClick({item: 'sobre', position: 800})}
        >
          Sobre nós
        </div>
        <div
          className={selectedItem === 'valores' ? 'selected' : ''}
          onClick={() => handleItemClick({item: 'valores', position: 1650})}
        >
          Nossos Valores
        </div>
        <div
          className={selectedItem === 'historia' ? 'selected' : ''}
          onClick={() => handleItemClick({item: 'historia', position: 2500})}
        >
          Nossa história
        </div>
        <div
          className={selectedItem === 'Contato' ? 'selected' : ''}
          onClick={() => handleItemClick({item: 'Contato', position: 3240})}
        >
          Contato
        </div>
        <div
          className={selectedItem === 'Notícias' ? 'selected' : ''}
          onClick={() => handleItemClick({item: 'Notícias', position: 4100})}
        >
          Notícias
        </div>
      </HeaderItems>
    </Container>
  );
}


const Container = styled.div`
  z-index: 10000;
	background: #041c44;
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 150vh;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:150px;
position: fixed;
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
  
}
@media (max-width: 1200px) {
  height: 12vh;
  width:100vw;
}
`;

const HeaderItems = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  align-items: center;
  width:90%;

  div {
    cursor: pointer;
    font-size: 22px;
    font-weight:600;
  }

  .selected {
    color: #00efff;
  }
  @media (max-width: 1200px) {
    width:95%;
    justify-content:space-between;
  div {
    cursor: pointer;
    font-size: 2.3vw;
    font-weight:600;
  }
  }
`;

const Logo = styled.div`
width:250px;
display:flex;
justify-content:space-around;
align-items:center;
h1{
  font-size:32px;
}
img{
  width: 120px;
  height: 100px;
  @media (max-width: 1200px) {
    width: 72px;
    height: 60px;
}
}
@media (max-width: 1200px) {
  display:flex;
flex-direction:column;
    width:10vw;
    border-radius: 30px;
    h1 {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
  }
  img{
    width:10vw;
    height:10vw;
  }
    }

`
