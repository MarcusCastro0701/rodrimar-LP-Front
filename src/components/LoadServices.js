import styled from "styled-components";

export default function LoadServices({ name, description, icon }) {
  return (
    <Service>
      <h1>
        {name}
        {icon}
      </h1>
      <h2>
        <ul>
          {description.map((item) => (
            <li>• {item}</li>
          ))}
        </ul>
      </h2>
    </Service>
  );
}

const Service = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  border-width: 5px;
  margin-top: 10px;
  border: 6px solid #1F22DA;
  border-color: #1F22DA;
  border-radius: 15px;

  h1 {
    width: 20%;
    display: flex;
    font-size: 37px;
flex-direction: column;
    color: #1F22DA;
    align-items: center;
    justify-content: center;
    @media (max-width: 1200px) {
      position: absolute;
      font-size: 23px;
      width: 60%;
      height: 5vh;
      border-radius: 5px;
      padding-top:5px;
      backdrop-filter: blur(5px);
    }
  }

  h2 {
    color: #1F22DA;
    width: 80%;
    padding: 10px;
    font-size: 25px;
    display: flex;
    flex-wrap: wrap; /* Ajuste para o alinhamento dos li */
    align-items: center;
    justify-content: center;
    line-height: 1.2em;

    ul {
      /* Adicionei ul para englobar os li */
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin-left: 10px;
      margin-top: 10px;
    }

    @media (max-width: 1200px) {
      font-size: 17px;
      display: flex;
      justify-content: center;
      margin-top: 5vh;
    }
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scroll-behavior: unset;
    border-width: 3px;
    align-items: center;
  }
`;
