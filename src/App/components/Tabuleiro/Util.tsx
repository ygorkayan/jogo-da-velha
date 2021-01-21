import { Peca, Posicao } from "./Styled";
import { ITabuleiro } from "../../Logica";

export interface IProps {
  tabuleiro: ITabuleiro;
  fazerJogada: (x: number, y: number) => void;
}

function valor(numero: number) {
  if (numero === 0) return "";
  if (numero === 1) return "X";
  if (numero === 2) return "0";
}

export function montarTabuleiro(tabuleiro: ITabuleiro, jogada: any) {
  const novoTabuleiro = [];

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      novoTabuleiro.push(
        <Posicao key={`${x}${y}`} onClick={() => jogada(x, y)}>
          <Peca>{valor(tabuleiro[x][y])}</Peca>
        </Posicao>
      );
    }
  }

  return novoTabuleiro;
}
