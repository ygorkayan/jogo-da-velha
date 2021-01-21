import React from "react";

export type ITabuleiro = [
  [number, number, number],
  [number, number, number],
  [number, number, number]
];

export function fazerJogada(
  tabuleiro: ITabuleiro,
  setTabuleiro: React.Dispatch<React.SetStateAction<ITabuleiro>>,
  jogador: number,
  jogadorVitoriso: number
) {
  return (x: number, y: number) => {
    const novoTabuleiro: ITabuleiro = [...tabuleiro];

    if (novoTabuleiro[x][y] === 0 && jogadorVitoriso === 0) {
      novoTabuleiro[x][y] = jogador;
      setTabuleiro(novoTabuleiro);
    }
  };
}

export function teveVencedor(tabuleiro: ITabuleiro, jogador: number): boolean {
  return (
    validacaoHorizontal(tabuleiro, jogador) ||
    validacaoVertical(tabuleiro, jogador) ||
    validacaoDiagonal(tabuleiro, jogador)
  );
}

function validacaoHorizontal(tabuleiro: ITabuleiro, jogador: number): boolean {
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[i][0] === jogador)
      if (tabuleiro[i][1] === jogador)
        if (tabuleiro[i][2] === jogador) return true;
  }

  return false;
}

function validacaoVertical(tabuleiro: ITabuleiro, jogador: number): boolean {
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[0][i] === jogador)
      if (tabuleiro[1][i] === jogador)
        if (tabuleiro[2][i] === jogador) return true;
  }

  return false;
}

function validacaoDiagonal(tabuleiro: ITabuleiro, jogador: number): boolean {
  if (tabuleiro[0][0] === jogador)
    if (tabuleiro[1][1] === jogador)
      if (tabuleiro[2][2] === jogador) return true;

  if (tabuleiro[0][2] === jogador)
    if (tabuleiro[1][1] === jogador)
      if (tabuleiro[2][0] === jogador) return true;

  return false;
}
