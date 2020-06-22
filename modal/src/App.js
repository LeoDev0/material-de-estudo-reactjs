import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleVisibility = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    document.querySelector("body").onclick = () => {
      setModalVisible(false);
    };
  }, [modalVisible]);

  return (
    <>
      <button onClick={handleVisibility}>Abrir modal</button>
      {/* <Modal visible={modalVisible} setVisible={setModalVisible}> */}
      <Modal visible={modalVisible}>
        <h1 style={{ margin: "0" }}>Testando 1, 2, 3...</h1>
      </Modal>
    </>
  );
}

export default App;
