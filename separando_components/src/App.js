import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchText, setSearchText] = useState("");

  function handleSearchInput(novoTexto) {
    setSearchText(novoTexto);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox
        frasePadrao="Digite aqui..."
        onChangeText={handleSearchInput}
      />

      <p>
        <strong>Texto procurado:</strong> {searchText}
      </p>

      <hr />

      <SearchBox frasePadrao={searchText} />

      <SearchBox />
    </>
  );
}

export default App;
