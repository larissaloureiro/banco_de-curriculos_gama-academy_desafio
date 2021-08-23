import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Confirmacao(props) {
  const history = useHistory();
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