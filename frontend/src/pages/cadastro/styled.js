import styled from 'styled-components';

export const CadastroContainer = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 60%;
  padding: 0 30px 30px 30px;
  background-color: #FFFFFF;
`

export const H1 = styled.h1`
  font-size: 20px;
  letter-spacing: .4rem;
  text-align: center;
  color: #000080;
  padding: 40px 0 5px 0;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const Label = styled.label`
  padding-top: 30px;
  color: #000080;
  font-size: 0.8rem;
  text-align: left;
  margin-right: 40px;
`
export const Sup = styled.sup`
  color: #FF0000;
`

export const InputMaior = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  width: 300px;
  padding: 0 .5rem;
  margin-top: 5px;

  border-radius: .3rem;

  &:focus,
  &:active {
    outline: none;
    boxed-shadow: none;
  }
  &:read-only  {
    background-color: #ececec;
  }
`

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 .5rem;
  margin-top: 5px;

  border-radius: .3rem;

  &:focus,
  &:active {
    outline: none;
    boxed-shadow: none;
  }
  &:read-only  {
    background-color: #ececec;
  }
`

export const Select = styled.select`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: .3rem;
  margin-top: 5px;


  &:focus,
  &:active {
    outline: none;
    boxed-shadow: none;
  }
`

export const CheckBox = styled.input`
  border-radius: .3rem;
  margin-left: 5px;
`

export const P = styled.p`
  color: #FF0000;
  font-size: 0.7rem;
  margin-top: 30px;
`

export const Button = styled.button`
  margin-top: 50px;
  text-align: center;
  height: 1.63rem;
  min-width: 50%;
  border: 1px solid #000;
  background: #000080;
  color: #fff;
  padding: 0 1rem;
  border-radius: 0.5rem;

  &:focus,
  &:active {
    outline: none;
    boxed-shadow: none;
  }
`
export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`