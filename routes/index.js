const router = require('express').Router();
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const userRouter = require('./users');
const movieRouter = require('./movies');
const NotFoundError = require('../errors/not-found');
const { MESSAGE_TYPE } = require('../constants/errors');
const { createUserValidator, loginValidator } = require('../utils/validator');

router.post('/signup', createUserValidator, createUser);
router.post('/signin', loginValidator, login);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use(() => {
  throw new NotFoundError(MESSAGE_TYPE.noPath);
});

module.exports = router;
