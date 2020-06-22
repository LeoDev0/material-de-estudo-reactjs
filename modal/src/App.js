import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleVisibility = () => {
    setModalVisible(true);
  };

  return (
    <>
      <button onClick={handleVisibility}>Abrir modal</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1 style={{ margin: "0" }}>Testando 1, 2, 3...</h1>
      </Modal>
    </>
  );
}

export default App;
