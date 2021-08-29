import React from 'react';
import * as S from './styled';

function Confirmacao(props) {
  return(
    <S.ConfirmacaoContainer>
      <S.Content>
        <S.H1>SUCESSO!</S.H1>
        <S.P>Seu cadastro foi realizado com sucesso.</S.P>
      </S.Content>
    </S.ConfirmacaoContainer>
  )
}

export default Confirmacao;