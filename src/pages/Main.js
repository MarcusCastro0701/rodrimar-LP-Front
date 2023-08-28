import styled, { createGlobalStyle } from "styled-components";
import Home from "./Home/Home";



export default function Main() {
  return (
    <Container>
      <Home/>
    </Container>
  );
}

const Container = styled.div`
background-image: lightblue;
min-height: 100vh;
width: 100%;
`;
