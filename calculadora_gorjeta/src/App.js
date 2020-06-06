import React, { useState } from "react";
import { Container, Input, BigParagraph } from "./styles";

function App() {
  const [conta, setConta] = useState("");
  const [porcentagem, setPorcentagem] = useState(10);

  const gorjeta = () => {
    return parseFloat(conta * (porcentagem * 0.01)).toFixed(2);
  };

  const contaTotal = () => (Number(conta) + Number(gorjeta())).toFixed(2);

  return (
    <Container>
      <h1>Calculadora de Gorjeta</h1>

      <label>Quanto deu a conta?</label>
      <br />
      <Input onChange={(event) => setConta(event.target.value)} type="number" />
      <br />
      <br />

      <label>Qual a porcentagem da gorjeta?</label>
      <br />
      <Input
        onChange={(event) => setPorcentagem(event.target.value)}
        value={porcentagem}
        type="number"
      />

      <hr style={{ margin: "20px 0" }} />
      <p>Sub-total: R$ {conta}</p>
      <p>
        Gorjeta ({porcentagem ? porcentagem : "0"}%): R$ {gorjeta()}
      </p>
      <BigParagraph>Total: R$ {contaTotal()}</BigParagraph>
    </Container>
  );
}

export default App;
