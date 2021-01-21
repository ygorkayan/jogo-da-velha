import React, { useState, useEffect } from "react";
import Painel from "./components/Painel/Painel";
import Tabuleiro from "./components/Tabuleiro/Tabuleiro";
import { ITabuleiro, fazerJogada, teveVencedor } from "./Logica";

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [jogadorVitoriso, setjogadorVitoriso] = useState(0);
  const [jogadorAtual, setJogadorAtual] = useState(2);
  const [tabuleiro, setTabuleiro] = useState<ITabuleiro>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  useEffect(() => {
    if (teveVencedor(tabuleiro, jogadorAtual)) {
      alert(`Jogador ${jogadorAtual} venceu!!`);
      setjogadorVitoriso(jogadorAtual);
    } else {
      setJogadorAtual(jogadorAtual === 1 ? 2 : 1);
    }
  }, [tabuleiro]);

  return (
    <Container>
      <Painel jogadorAtual={jogadorAtual} />
      <Tabuleiro
        tabuleiro={tabuleiro}
        fazerJogada={fazerJogada(
          tabuleiro,
          setTabuleiro,
          jogadorAtual,
          jogadorVitoriso
        )}
      />
    </Container>
  );
}
