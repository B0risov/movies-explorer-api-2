const allowedCors = [
  'https://praktikum.tk',
  'http://praktikum.tk',
  'https://localhost:3000',
  'http://localhost:3000',
  'http://51.250.65.78:3000',
  'https://api.B0rDiplom.students.nomoredomains.monster',
  'https://B0rDiplom.students.nomoredomains.monster',
  'http://api.B0rdiplom.students.nomoredomains.monster',
  'http://B0rdiplom.students.nomoredomains.monster',
  'https://api.b0rDiplom.students.nomoredomains.monster',
  'https://b0rDiplom.students.nomoredomains.monster',
  'http://api.b0rdiplom.students.nomoredomains.monster',
  'http://b0rdiplom.students.nomoredomains.monster',
  'localhost:3000',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

const DEFAULT_ALLOWED_HEADERS = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';

module.exports = {
  allowedCors, DEFAULT_ALLOWED_METHODS, DEFAULT_ALLOWED_HEADERS,
};
