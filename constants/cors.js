const allowedCors = [
  'https://praktikum.tk',
  'http://praktikum.tk',
  'https://localhost:3000',
  'http://localhost:3000',
  'http://51.250.65.78:3000',
  'https://api.diplom.movies.nomoreparties.sbs',
  'https://diplom.movies.nomoreparties.sbs',
  'http://api.diplom.movies.nomoreparties.sbs',
  'http://diplom.movies.nomoreparties.sbs',
  'https://api.diplom.movies.nomoreparties.sbs',
  'https://diplom.movies.nomoreparties.sbs',
  'http://api.diplom.movies.nomoreparties.sbs',
  'http://diplom.movies.nomoreparties.sbs',
  'localhost:3000',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

const DEFAULT_ALLOWED_HEADERS = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';

module.exports = {
  allowedCors, DEFAULT_ALLOWED_METHODS, DEFAULT_ALLOWED_HEADERS,
};
