import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputText = styled.input`
  border: 2px solid black;
  padding: 25px;
  font-size: 17px;
  width: 300px;
  margin-right: 7px;
`;

function SearchBox(props) {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    if (props.onChangeText) {
      props.onChangeText(texto);
    }
  }, [texto]);

  return (
    <InputText
      type="text"
      value={texto}
      onChange={(event) => setTexto(event.target.value)}
      // placeholder={props.frasePadrao ? props.frasePadrao : "Padrão"}
      placeholder={props.frasePadrao ?? "Placeholder padrão"}
    />
  );
}

export default SearchBox;
