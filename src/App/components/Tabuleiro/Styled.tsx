import styled from "styled-components";

export const Container = styled.div`
  width: 640px;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Posicao = styled.div`
  width: 33.3%;
  height: 33.3%;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Peca = styled.p`
  font-weight: 900;
  font-size: 12rem;
`;
