import UserRepository from '../repositories/user.repository.js';

async function createUser(user) {
  const userComMesmoCpf = await UserRepository.getUserByCpf(user.cpf);
  if (userComMesmoCpf) {
    throw new Error('Já existe um usuário cadastrado com este CPF.')
  }
  return await UserRepository.createUser(user);
}

function cpfValidation(cpf) {
  if (cpf.length != 11) {
    return false;
  }

  let numeros = cpf.substring(0, 9);
  let digitos = cpf.substring(9);

  let soma = 0;
  for(let i = 10; i > 1; i--) {
    soma += numeros.charAt(10 - i) * i
  }
  let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) {
    return false;
  } 

  soma = 0;
  numeros = cpf.substring(0, 10);
  for (let k = 11; k > 1; k--) {
    soma += numeros.charAt(11 - k) * k;
  }
  resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) {
    return false;
  }

  return true;
}

export default {
  createUser,
  cpfValidation
}