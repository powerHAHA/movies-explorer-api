const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');

const usersRoutes = require('./users');
const moviesRoutes = require('./movies');

router.use('/users', usersRoutes);
router.use('/movies', moviesRoutes);
router.all('/*', (req, res, next) => {
  next(new NotFoundError('Неверный адрес запроса'));
});
module.exports = router;
