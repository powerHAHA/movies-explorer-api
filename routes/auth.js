const router = require('express').Router();
const { validateLoginUser, validateCreateUser } = require('../middlewares/validate');

const {
  createUser,
  loginUser,
} = require('../controllers/users');

router.post('/signin', validateLoginUser, loginUser);
router.post('/signup', validateCreateUser, createUser);
module.exports = router;
