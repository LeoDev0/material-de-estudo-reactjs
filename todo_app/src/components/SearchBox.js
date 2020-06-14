import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputText = styled.input`
  border: 2px solid black;
  padding: 25px;
  font-size: 17px;
  width: 300px;
  margin-right: 7px;
  border-radius: 8px;
`;

function SearchBox(props) {
  const [texto, setTexto] = useState("");

  function handleKeyUp(event) {
    if (event.keyCode == 13) {
      if (props.onEnter) {
        props.onEnter(texto);
      }
      setTexto("");
    }
  }
  return (
    <InputText
      type="text"
      value={texto}
      onChange={(event) => setTexto(event.target.value)}
      onKeyUp={handleKeyUp}
      placeholder={props.frasePadrao ?? "Placeholder padrão"}
    />
  );
}

export default SearchBox;
