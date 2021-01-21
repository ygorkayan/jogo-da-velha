import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 640px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface IProps {
  jogadorAtual: number;
}

export default function Area(props: IProps) {
  const { jogadorAtual } = props;
  return (
    <Container>
      <h1>Jogo Da Velha</h1>
      <p>Vez do Jogador: {jogadorAtual === 1 ? "X" : "O"}</p>
    </Container>
  );
}
