import React from "react";
import styled from "styled-components";

const Site = styled.div`
  width: 400px;
  height: 200px;
  background-color: lightgreen;
  text-align: center;
`;

const Title = styled.h1`
  color: blue;
  font-size: 18px;
`;

const Button = styled.button`
  font-size: 20px;
  color: black;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: ${(props) => props.color || "green"};
`;

const ButtonPequeno = styled(Button)`
  padding: 20px;
  font-size: 30px;
  border: dashed;
  &:hover {
    transition-duration: 1s;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const ActiveButton = styled.button`
  background-color: ${(props) => (props.ativo ? "#0000F6" : "#CCC")};
`;

function App() {
  return (
    <Site>
      <Title>Styled Components</Title>
      <Button>Botão Padrão</Button>
      <Button color="red">Botão Vermelho</Button>
      <Button color="blue">Botão Azul</Button>
      <br />
      <br />

      <ActiveButton ativo={true}>Ativo</ActiveButton>
      <ActiveButton ativo={false}>Inativo</ActiveButton>
      <br />
      <br />

      <ButtonPequeno>Botão extendido de Button</ButtonPequeno>
    </Site>
  );
}

export default App;
