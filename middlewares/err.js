const { MESSAGE_TYPE } = require('../constants/errors');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? MESSAGE_TYPE.default
        : message,
    });

  next();
};
