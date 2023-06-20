require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const {
  PORT = 3000, NODE_ENV, BASE_PATH, DB_NAME,
} = process.env;
const app = express();

const routes = require('./routes/index');
const err = require('./middlewares/err');
const limiter = require('./middlewares/rate-limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { allowedCors, DEFAULT_ALLOWED_METHODS, DEFAULT_ALLOWED_HEADERS } = require('./constants/cors');

app.use(requestLogger);

app.use(limiter);

mongoose.connect(NODE_ENV === 'production' ? DB_NAME : 'mongodb://localhost:27017/moviesdb', {
  autoIndex: true,
});

app.use((req, res, next) => {
  const { method } = req;
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', '*');
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', DEFAULT_ALLOWED_HEADERS);
    return res.end();
  }
  next();
  return null;
});

app.use(helmet());

app.use(bodyParser.json());

app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use(err);

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${BASE_PATH}`);
  console.log(`Слушаем порт ${PORT}`);
});
