import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Cadastro(props) {
  const history = useHistory();
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [sexo, setSexo] = useState("");

  const [endLogradouro, setEndLogradouro] = useState();
  const [endNumero, setEndNumero] = useState("");
  const [endComplemento, setEndComplemento] = useState("");
  const [endBairro, setEndBairro] = useState();
  const [endCidade, setEndCidade] = useState();
  const [endEstado, setEndEstado] = useState();
  const [endCep, setEndCep] = useState("");

  const [contatoFixo, setContatoFixo] = useState("");
  const [contatoTel, setContatoTel] = useState("");
  const [contatoCelular, setContatoCelular] = useState("");
  const [contatoNome, setContatoNome] = useState("");
  const [email, setEmail] = useState("");

  const [identidade, setIdentidade] = useState("");
  const [cpf, setCpf] = useState("");
  const [possuiVeiculo, setPossuiVeiculo] = useState("");
  const [possuiHabilitacao, setPossuiHabilitacao] = useState("");

  const [erro, setErro] = useState(false);

  function buscaCep(e) {
    const cep = e.target.value;
    setEndCep(cep);

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => {
        const dados = res.data;
        setEndLogradouro(dados.logradouro);
        setEndBairro(dados.bairro);
        setEndCidade(dados.localidade);
        setEndEstado(dados.uf);
      })
      .catch(err => {
        setErro(true);
      });

  }

  function handleCadastro() {
    let dadosFormulario = {
      nome,
      cargo,
      nascimento,
      estadoCivil,
      sexo,
    
      endLogradouro, 
      endNumero, 
      endComplemento, 
      endBairro, 
      endCidade, 
      endEstado, 
      endCep, 
    
      contatoFixo, 
      contatoTel, 
      contatoCelular, 
      contatoNome,
      email,
    
      identidade,
      cpf,
      possuiVeiculo,
      possuiHabilitacao,
    }
    axios.post('url', dadosFormulario)
      .then(() => {
        setErro(false);
        history.push('/confirmacao');
      })
      .catch(err => {
        setErro(true);
      })
  }

  return (
    <>
      <S.CadastroContainer>
        <form onSubmit={handleCadastro}>
          <S.H1>DADOS PESSOAIS</S.H1>
          <hr/>
          <S.Content>
            <S.Label>Nome Completo:<br/>
              <S.InputMaior type="text" placeholder="Nome Completo" required
                value={nome} onChange={(e) => setNome(e.target.value)} />
            </S.Label>

            <S.Label>Cargo Pretendido:<br/>
              <S.InputMaior type="text" placeholder="Cargo" required
              value={cargo} onChange={(e) => setCargo(e.target.value)} />
            </S.Label>

            <S.Label>Data de Nascimento:<br/>
              <S.Input type="date" placeholder="dd/mm/aaaa" required
                value={nascimento} onChange={(e) => setNascimento(e.target.value)} />
            </S.Label>

            <S.Label>Estado Civil:<br/>
              <S.Select value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)}>
                <option value="solteiro">Solteiro(a)</option>
                <option value="casado">Casado(a)</option>
                <option value="divorciado">Divorciado(a)</option>
                <option value="viuvo">Viúvo(a)</option>
                <option value="separado">Separado(a)</option>
              </S.Select>
            </S.Label>

            <S.Label>Sexo:<br/>
              <S.Select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </S.Select>
            </S.Label>
          </S.Content>

          <S.H1>ENDEREÇO</S.H1>
          <hr/>
          <S.Content>
            <S.Label>CEP:<br/>
              <S.Input type="text" placeholder="Nome Completo" required
                value={endCep} onChange={buscaCep} />
            </S.Label>

            <S.Label>Logradouro:<br/>
              <S.Input type="text" readOnly
              value={endLogradouro} />
            </S.Label>

            <S.Label>Número:<br/>
              <S.Input type="text" placeholder="Nº" required
                value={endNumero} onChange={(e) => setEndNumero(e.target.value)} />
            </S.Label>

            <S.Label>Complemento:<br/>
              <S.Input type="text" placeholder="Bloco, Apto, Casa"
                value={endComplemento} onChange={(e) => setEndComplemento(e.target.value)} />
            </S.Label>

            <S.Label>Bairro:<br/>
              <S.Input type="text" readOnly
                value={endBairro} />
            </S.Label>

            <S.Label>Cidade:<br/>
              <S.Input type="text" readOnly
                value={endCidade} />
            </S.Label>

            <S.Label>UF:<br/>
              <S.Input type="text" readOnly
                value={endEstado} />
            </S.Label>

          </S.Content>

          <S.H1>CONTATOS</S.H1>
          <hr/>
          <S.Content>
          <S.Label>Celular:<br/>
              <S.Input type="text" placeholder="11 99999-9999" required
                value={contatoCelular} onChange={(e) => setContatoCelular(e.target.value)} />
            </S.Label>

            <S.Label>Telefone Fixo:<br/>
              <S.Input type="text" placeholder="11 5555-5555"
                value={contatoFixo} onChange={(e) => setContatoFixo(e.target.value)} />
            </S.Label>

            <S.Label>Telefone Contato:<br/>
              <S.Input type="text" placeholder="11 5555-5555"
              value={contatoTel} onChange={(e) => setContatoTel(e.target.value)} />
            </S.Label>

            <S.Label>Contato:<br/>
              <S.Input type="text" placeholder="Nome do Contato"
                value={contatoNome} onChange={(e) => setContatoNome(e.target.value)} />
            </S.Label>

            <S.Label>E-mail:<br/>
              <S.InputMaior type="email" placeholder="email@email.com" required
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </S.Label>
          </S.Content>

          <S.H1>DOCUMENTOS</S.H1>
          <hr/>
          <S.Content>
            <S.Label>Identidade:<br/>
              <S.Input type="text" placeholder="RG"
                value={identidade} onChange={(e) => setIdentidade(e.target.value)} />
            </S.Label>

            <S.Label>CPF:<br/>
              <S.Input type="text" placeholder="123.456.789-09" required
              value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </S.Label>

            <S.Label>Possui Veículo?
              <S.CheckBox type="checkbox"
                value={possuiVeiculo} onChange={(e) => setPossuiVeiculo(e.target.value)} />
            </S.Label>

            <S.Label>Possui Habilitação? 
              <S.CheckBox type="checkbox"
                value={possuiHabilitacao} onChange={(e) => setPossuiHabilitacao(e.target.value)} />
            </S.Label>
          </S.Content>



          <S.Button>Cadastrar</S.Button>
        </form>

        { erro ? <S.ErrorMsg>Ocorreu um erro, tente novamente.</S.ErrorMsg> : '' }
      </S.CadastroContainer>
    </>
  );
}

export default Cadastro;