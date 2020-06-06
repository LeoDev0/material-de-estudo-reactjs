import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid black;
  font-size: 16px;
  padding: 10px;
  margin-right: 5px;
`;

function App() {
  const [contagem, setContagem] = useState(0);

  const botaoAction = () => {
    setContagem(contagem + 1);
  };

  const [texto, setTexto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (event) => {
    setTexto(event.target.value);
  };

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          marginBottom: "20px",
          padding: "5px",
        }}
      >
        <div>{contagem} vezes</div>
        <button onClick={botaoAction}>Clique para adicionar</button>
      </div>

      <div
        style={{
          backgroundColor: "green",
          marginBottom: "20px",
          padding: "5px",
        }}
      >
        <Input onChange={handleInput} type="text" value={texto} />

        {/* CONDICIONAL DE EXIBIÇÃO */}
        {texto.length > 0 && (
          <p>
            {texto.length} caractere{texto.length > 1 ? "s" : ""}
          </p>
        )}
      </div>

      <div
        style={{
          backgroundColor: "yellow",
          marginBottom: "20px",
          padding: "5px",
        }}
      >
        <Input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Digite seu email"
          type="email"
        />
        <Input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Digite sua senha"
          type="password"
        />
        {isLogged ? (
          <button onClick={() => alert(`${email} - ${password}`)}>Sair</button>
        ) : (
          <button onClick={() => alert(`${email} - ${password}`)}>
            Entrar
          </button>
        )}
        {/* <button onClick={() => alert(`${email} - ${password}`)}>Entrar</button> */}
      </div>
    </>
  );
}

export default App;
