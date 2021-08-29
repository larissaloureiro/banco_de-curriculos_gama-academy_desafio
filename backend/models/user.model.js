import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const User = db.define('users', {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cargo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nascimento: {
    type: Sequelize.STRING,
    allowNull: false
  },
  estadoCivil: {
    type: Sequelize.STRING,
    allowNull: true
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: true
  },
  endLogradouro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endNumero: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endComplemento: {
    type: Sequelize.STRING,
    allowNull: true
  },
  endBairro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endCidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endEstado: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endCep: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contatoFixo: {
    type: Sequelize.STRING,
    allowNull: true
  },
  contatoCelular: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contatoTel: {
    type: Sequelize.STRING,
    allowNull: true
  },
  contatoNome: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  identidade: {
    type: Sequelize.STRING,
    allowNull: true
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false
  },
  possuiVeiculo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  possuiHabilitacao: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {underscored: true})

export default User;