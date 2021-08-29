import express from 'express';
import cors from 'cors';
import winston from 'winston';
import UsersRouter from './routes/user.route.js';

import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './swagger.js';

const { combine, timestamp, label, printf} = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} - ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new(winston.transports.Console)(),
    new (winston.transports.File)({ filename: "banco-de-curriculos-api.log" })
  ],
  format: combine(
    label({ label: "banco-de-curriculos-api" }),
    timestamp(),
    myFormat
  )
});

const app = express();
app.use(express.json());
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', UsersRouter);


app.use((err, req, res, next) => {
  let error;
  if (err.message) {
    error = err.message;
  } else {
    error = err;
  }
  res.status(400).send({ error });
  logger.error(`${req.method} ${req.baseUrl} - ${error}`);
});

app.listen(5000, () => console.log('API Started at port 5000!'));