const jwt = require('jsonwebtoken');
const AuthError = require('../errors/auth');

const { NODE_ENV, JWT_SECRET } = process.env;
const { MESSAGE_TYPE } = require('../constants/errors');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthError(MESSAGE_TYPE.unauthorized);
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret-key',
    );
  } catch (err) {
    throw new AuthError(MESSAGE_TYPE.unauthorized);
  }

  req.user = payload;
  next();
};
