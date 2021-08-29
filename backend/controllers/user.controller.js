import UserService from '../services/user.service.js';

async function createUser(req, res, next) {
  try {
    let user  = req.body;
    if (!user.nome || !user.cargo || !user.nascimento ||
      !user.endCep || !user.endLogradouro || !user.endNumero ||
      !user.endBairro || !user.endCidade || !user.endEstado ||
      !user.contatoCelular || !user.email || !user.cpf) {
      throw new Error('Nome, Cargo, Data de Nascimento, CEP, Logradouro, Número, Bairro, Cidade, Estado, Celular, Email e CPF são obrigatórios.')
    }

    const cpfValido = UserService.cpfValidation(user.cpf);
    if (!cpfValido){
      throw new Error('O CPF não é válido.')
    }

    user = await UserService.createUser(user)
    res.send(user);
    logger.info(`POST /user - ${JSON.stringify(user)}`);
  } catch (err) {
    next(err);
  }
}

export default {
    createUser
}