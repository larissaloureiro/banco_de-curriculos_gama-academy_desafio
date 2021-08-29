import User from '../models/user.model.js';

async function createUser(user) {
    try {
        return await User.create(user);
    } catch(err) {
        throw err;
    }
}

async function getUserByCpf (cpf) {
  return await User.findOne({
    where: {
      cpf
    }
  })
}

export default {
    createUser,
    getUserByCpf
}