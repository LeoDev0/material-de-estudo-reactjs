import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalArea = styled.div`
  text-align: center;
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 30px 10px;
`;

function Modal(props) {
  const handleBackgroundClick = () => {
    props.setVisible(false);
  };

  return (
    <>
      {props.visible && (
        <ModalBackground onClick={handleBackgroundClick}>
          <ModalArea>{props.children}</ModalArea>
        </ModalBackground>
      )}
    </>
  );
}

export default Modal;
