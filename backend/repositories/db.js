import {database_postgresql_url} from '../config.js';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  database_postgresql_url,
  {
    dialect: 'postgres',
    define: {
    timestamps: false
    }
  }
);

export default sequelize;