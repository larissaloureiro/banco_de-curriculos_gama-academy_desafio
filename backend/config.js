import dotenv from 'dotenv';
dotenv.config();

const database_postgresql_url = process.env.DATABASE_POSTGRESQL_URL;

export {
  database_postgresql_url
}