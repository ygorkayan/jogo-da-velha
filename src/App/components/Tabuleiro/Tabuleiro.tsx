import React from "react";
import { Container } from "./Styled";
import { IProps, montarTabuleiro } from "./Util";

export default function Tabuleiro(props: IProps) {
  const { tabuleiro, fazerJogada } = props;
  return <Container>{montarTabuleiro(tabuleiro, fazerJogada)}</Container>;
}
