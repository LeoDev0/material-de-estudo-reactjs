import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { title: "Comprar bolo", done: false },
      { title: "Pegar cachorro no petshop", done: true },
      { title: "gravar aula", done: true },
    ]);
  }, []);

  function addAction(newItem) {
    let newList = [...list, { title: newItem, done: false }];
    setList(newList);
  }

  function handleToggleDone(index) {
    let newList = [...list];
    // if (newList[index].done == false) {
    //   newList[index].done = true;
    // } else {
    //   newList[index].done = false;
    // }
    newList[index].done = !newList[index].done;
    setList(newList);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Lista de Tarefas</h1>
        <SearchBox frasePadrao="Adicione uma tarefa" onEnter={addAction} />
      </div>
      <hr />

      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => handleToggleDone(index)}>
            {item.done === true ? (
              <>
                <del>{item.title}</del> ✅
              </>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
