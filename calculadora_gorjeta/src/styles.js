import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  /* text-align: center; */
  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

const Input = styled.input`
  height: 35px;
  width: 300px;
  padding: 5px 10px;
  border: 2px solid lightgray;
`;

const BigParagraph = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export { Container, Input, BigParagraph };
